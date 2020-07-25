import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/profile_pic/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div>
        <h1> about page</h1>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ display: 'flex', borderRadius: '50%' }}
        />
      </div>
    </Layout>
  );
};

export default AboutPage;
