import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import LabListing from '../components/LabListing';

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

const LabsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-area: main;
  grid-gap: 10px;
  justify-content: center;
  justify-items: stretch;
  align-content: stretch;
  align-items: start;
  grid-auto-flow: row;
  padding: 1em;
  margin: 0;

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const LabsPage = ({ data }) => {
  const labs = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Container>
        <h1>Code Laboratory</h1>
        <h2>ReactJS Components, Articles, and anything else accomplished on my spare time.</h2>
      </Container>
      <LabsContainer>
        {labs.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id}>
            <LabListing
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              type={node.frontmatter.type}
            />
          </Link>
        ))}
      </LabsContainer>
    </Layout>
  );
};

export default LabsPage;

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/^\/labs/" }}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(fromNow: true)
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
