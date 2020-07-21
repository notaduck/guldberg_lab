import React, { useState } from 'react';
import { grahql } from 'gatsby';
import Layout from '../components/Layout';

const SearchPage = data => {
  return (
    <Layout>
      <h1>Search Page</h1>
    </Layout>
  );
};

export const query = graphql`
  query posts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;
export default SearchPage;
