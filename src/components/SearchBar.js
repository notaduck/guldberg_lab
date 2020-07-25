import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };
  }

  render() {
    return (
      <div>
        <SearchBarWrapper>
          <Input
            type="text"
            name="search"
            placeholder=">_ Search..."
            value={this.state.query}
            onChange={this.search}
            autocomplete="off"
          />
        </SearchBarWrapper>
        <p style={{ marginbottom: '10px' }}>
          {' '}
          Number of results: {this.state.results.length}
        </p>
        {this.state.results.map(page => (
          <Post key={page.id}>
            <Link to={`/posts${page.slug}`}>{page.title}</Link>
            {/* {': ' + page.tags.join(`,`)} */}
          </Post>
        ))}
        {/* </ul> */}
      </div>
    );
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };
}

const Input = styled.input`
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid var(--color-search);
  background: var(--color-background);
  height: 50px;
  width: 75%;
  box-decoration: none;

  :focus {
    outline: none;
  }
`;

const Post = styled.article`
  border-left: 4px solid rgb(188, 67, 93);
  padding: 1rem;
  padding-top: 0;
  margin-bottom: 3rem;
  a {
    color: var(--color-text);
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
`;

const SearchBarWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;
