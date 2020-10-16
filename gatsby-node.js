const { paginate } = require('gatsby-awesome-pagination')
const { forEach, uniq, filter, not, isNil, flatMap } = require('rambdax')
const path = require('path')
const { toKebabCase } = require('./src/helpers')

const pageTypeRegex = /src\/(.*?)\//
const getType = node => node.fileAbsolutePath.match(pageTypeRegex)[1]

const templates = {
  indexTemplate: path.resolve(`./src/templates/templateIndex.js`),
  blogTemplate: path.resolve(`./src/templates/templateBlog.js`),
  docTemplate: path.resolve(`./src/templates/templateDoc.js`),
  tagsTemplate: path.resolve(`./src/templates/templateTag.js`),
  professorTemplate: path.resolve(`./src/templates/templateProfessor.js`),
  lectureTemplate: path.resolve(`./src/templates/templateLecture.js`),
  researchTemplate: path.resolve(`./src/templates/templateResearch.js`),
  personalresearchTemplate: path.resolve(`./src/templates/templatePersonalResearch.js`),
}

//const pageTemplate = path.resolve(`./src/templates/page.js`)
//const indexTemplate = path.resolve(`./src/templates/index.js`)
//const bulletTemplate = path.resolve(`./src/templates/bulletpage.js`)
//const tagsTemplate = path.resolve(`./src/templates/tags.js`)


exports.createPages = ({ actions, graphql, getNodes }) => {
  const { createPage } = actions
  const allNodes = getNodes()

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const {
      allMarkdownRemark: { edges: markdownPages },
      site: { siteMetadata },
    } = result.data

    const sortedPages = markdownPages.sort((pageA, pageB) => {
      const typeA = getType(pageA.node)
      const typeB = getType(pageB.node)

      return (typeA > typeB) - (typeA < typeB)
    })

    const posts = allNodes.filter(
      ({ internal, fileAbsolutePath }) =>
        internal.type === 'MarkdownRemark' &&
        fileAbsolutePath.indexOf('/pageIndex/') !== -1,
    )

    // Create posts index with pagination
    paginate({
      createPage,
      items: posts,
      component: templates['indexTemplate'],
      itemsPerPage: siteMetadata.postsPerPage,
      pathPrefix: '/',
    })

    // Create pages from Markdown files
    result.data.allMarkdownRemark.edges.forEach(edge => {            
      let slug = edge.node.frontmatter.path    
     
      // Get the part of the slug we want, ex. journal
      let slugKey = slug.split('/')[1]

      // If the slug matches a template, use that, otherwise
      // fallback to the default journal template.
      // You could use your own logic here.
      //let template = templates[slugKey] || templates['journal']
      //console.log("template: "+slugKey)
      
      let templateStr=''
      if(slugKey == '') templateStr = 'indexTemplate';    
      else if(slugKey == 'lecture') templateStr = 'lectureTemplate';
      else if(slugKey == 'personalresearch') templateStr = 'personalresearchTemplate';
      else if(slugKey == 'student' || slugKey == 'lectures' || slugKey == 'publication') templateStr = 'docTemplate';
      else if(slugKey == 'professor') templateStr = 'professorTemplate';  
      else if(slugKey == 'research') templateStr = 'researchTemplate';     
      
      
      createPage({
        path: slug, // required
        component: templates[templateStr],
        context: { slug: slug },
      })
    })

    /*
    // Create each markdown page and post
    forEach(({ node }, index) => {
      const previous = index === 0 ? null : sortedPages[index - 1].node
      const next =
        index === sortedPages.length - 1 ? null : sortedPages[index + 1].node
      const isNextSameType = getType(node) === (next && getType(next))
      const isPreviousSameType =
        getType(node) === (previous && getType(previous))

      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          type: getType(node),
          next: isNextSameType ? next : null,
          previous: isPreviousSameType ? previous : null,
        },
      })
    }, sortedPages)
    */

    // Create tag pages
    const tags = filter(
      tag => not(isNil(tag)),
      uniq(flatMap(post => post.frontmatter.tags, posts)),
    )

    forEach(tag => {
      const postsWithTag = posts.filter(
        post =>
          post.frontmatter.tags && post.frontmatter.tags.indexOf(tag) !== -1,
      )

      paginate({
        createPage,
        items: postsWithTag,
        component: templates['tagsTemplate'],
        itemsPerPage: siteMetadata.postsPerPage,
        pathPrefix: `/tag/${toKebabCase(tag)}`,
        context: {
          tag,
        },
      })
    }, tags)

    return {
      sortedPages,
      tags,
    }
  })
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      author: String
      date: Date! @dateformat
      path: String!
      tags: [String!]
      excerpt: String
      coverImage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}