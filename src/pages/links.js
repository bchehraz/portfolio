import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Links = () => {
  return (
    <Layout>
      <Container>
        <h4>This is where I will share useful links categorized by what their use is! Coming soon :)</h4>
      </Container>
    </Layout>
  )
}

export default Links;
