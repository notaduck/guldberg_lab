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
  width: 100%;
  margin: 3rem 5rem 5rem 25rem;
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
