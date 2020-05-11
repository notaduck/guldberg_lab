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
    <Container>
      <Sidebar />
      <MainWrapper>{children}</MainWrapper>
    </Container>
  );
};

const MainWrapper = styled.main`
  flex: 3;
  max-width: 800px;
`;

const Container = styled.div`
  display: flex;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
