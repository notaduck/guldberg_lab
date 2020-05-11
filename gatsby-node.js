/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: '/',
    toPath: '/blog',
    isPermanent: 'true',
  });

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(res => {
      paginate({
        createPage, // The Gatsby `createPage` function
        items: res.data.allMarkdownRemark.edges, // An array of objects
        itemsPerPage: 5, // How many items you want per page
        pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('./src/templates/blog.js'), // Just like `createPage()`
      });

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};
