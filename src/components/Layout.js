/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Sidebar />
        <MainWrapper>{children}</MainWrapper>
      </Container>
    </>
  );
};

const MainWrapper = styled.main`
  /* margin-left: 1%;
  margin-top: 1%;
  margin-right: 1%;
  flex: 3; */
  /* max-width: 100%; */
  width: 100%;
  /* margin-left: 21rem; */
  margin: 1rem 1rem 1rem 21rem;
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
