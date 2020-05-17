import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Calendar, Coffee } from 'react-feather';

import Pager from '../components/Pager';
import Layout from '../components/Layout';

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.slug}>
            <Link to={`/posts${node.frontmatter.slug}`}>
              <h3> >_ {node.frontmatter.title}</h3>
            </Link>
            <p>
              <Calendar size="16" /> {''}
              {node.frontmatter.date} {''} {''}
              <Coffee size="16" /> {node.timeToRead} min.
            </p>
            <p>{node.excerpt}</p>
            <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>
              Read More
            </Link>
          </Post>
        ))}
        <Pager pageContext={pageContext} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostListing($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
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

const Post = styled.article`
  border-left: 4px solid rgb(188, 67, 93);
  padding: 1rem;
  padding-top: 0;
  margin-bottom: 3rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
`;
export default Blog;
