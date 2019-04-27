import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import ProjectListing from '../components/ProjectListing';

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

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-area: main;
  grid-gap: 10px;
  justify-content: start;
  justify-items: stretch;
  align-content: stretch;
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

const PortfolioPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Container>
        <h1>Web Developer Portfolio</h1>
        <h2>Check out my latest web software development portfolio projects</h2>
      </Container>
      <ProjectsContainer>
        {projects.map(({ node }, index) => (
          <Link to={node.fields.slug} key={node.id}>
            <ProjectListing
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              startDate={node.frontmatter.startDate}
              duration={node.frontmatter.duration}
              type={node.frontmatter.type}
              index={index}
            />
          </Link>
        ))}
      </ProjectsContainer>
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
