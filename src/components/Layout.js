import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Sidebar from './SideBar';
import DarkToggle from './DarkToggle';

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Sidebar />
        <MainWrapper>{children}</MainWrapper>

        <DarkToggleWrapper>
          <DarkToggle />
        </DarkToggleWrapper>
      </Container>
    </>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  margin: 3rem 5rem 5rem 30rem;
  max-width: 50vw;
`;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const DarkToggleWrapper = styled.div`
  padding-top: 5rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
