import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <div>
      {previousPagePath && (
        <span>
          <StyledLink to={previousPagePath}> Previous </StyledLink>
        </span>
      )}{' '}
      {nextPagePath && (
        <span>
          <StyledLink to={nextPagePath}> Next </StyledLink>
        </span>
      )}
    </div>
  );
};

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  text-decoration: none;
`;

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pager;
