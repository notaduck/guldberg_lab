import { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => {
    navigate('/blog/');
  }, []);
  return null;
};

export default IndexPage;
