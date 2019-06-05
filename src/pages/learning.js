import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100vw;
  max-width: 1000px;
  padding: 2em;
`;

const LearningPage = () => (
  <Layout>
    <Container>
    <h1>{`What I'm Learning`}</h1>
    <h3>{`This is where I list what I'm currently learning...`}</h3>
    </Container>
  </Layout>
);

export default LearningPage;
