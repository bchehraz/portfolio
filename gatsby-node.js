/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // console.log(createFilePath({ node, getNode, basePath: 'pages' }));
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    let parentPath = '/';
    if (/^\/portfolio/.test(slug)) {
      parentPath = '/portfolio/';
    } else {
      parentPath = '/labs/';
    }
    createNodeField({
      node,
      name: 'parentPath',
      value: parentPath,
    });
    console.log("PATH: " + parentPath);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (/^\/portfolio/.test(node.fields.slug)) {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/project.js'),
          context: {
            slug: node.fields.slug,
          },
        });
      } else {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/lab.js'),
          context: {
            slug: node.fields.slug,
          },
        });
      }
    });
  });
};
