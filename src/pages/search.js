import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SearchBar from '../components/SearchBar';

import Layout from '../components/Layout';
const SearchPage = () => {
  const data = useStaticQuery(graphql`
    query {
      siteSearchIndex {
        index
      }
    }
  `);
  return (
    <Layout>
      <div>
        <SearchBar searchIndex={data.siteSearchIndex.index} />
      </div>
    </Layout>
  );
};

export default SearchPage;
