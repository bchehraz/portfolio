import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import ProjectListing from '../components/ProjectListing';
import ProjectsList from '../components/ProjectsList';

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

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>Developer Portfolio</h1>
        <h2>Check out my latest software development projects</h2>
      </Container>
      <ProjectsList projects={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default PortfolioPage;

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/^\/portfolio/" }}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            startDate
            duration
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
