import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './Layout';
import styled from 'styled-components';
// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout>
        <Title>
          {' '}
          {'>'}_ {markdownRemark.frontmatter.title}
        </Title>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

const Title = styled.h1`
  border-left: 4px solid rgb(188, 67, 93);

  padding: 1rem;
`;
