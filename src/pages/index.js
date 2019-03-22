import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

import Layout from '../components/layout';
import FloatingIcon from '../components/FloatingIcon';
import ProjectListing from '../components/ProjectListing';
import LabListing from '../components/LabListing';

const HeadingContainer = styled.div`
  display: flex;
  height: calc(100vh - 200px);
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  padding: 2em;
`;

const EmailText = styled.span`
  color: #0099ff;
  text-decoration: underline;
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
  padding: 10px;
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

const ProjectsHeaderContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const LabsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-area: main;
  grid-gap: 10px;
  justify-content: start;
  justify-items: stretch;
  align-content: stretch;
  grid-auto-flow: row;
  padding: 10px;
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

const LabsHeaderContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const IndexPage = ({ data }) => {
  const { totalCount } = data.allMarkdownRemark;
  const content = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <HeadingContainer>
        <div>
          <h1>{'Hi, I\'m a Software Developer from Fresno, California.'}</h1>
          <h1>I can help you build your next website.</h1>
          <h2>I design and build responsive full-stack web applications</h2>
        </div>
        <div>
          <h2>
            {'Have a project you\'d like to discuss? Let\'s chat '}
            <a href="mailto:babak.chehraz@gmail.com">
              <EmailText>babak.chehraz@gmail.com</EmailText>
            </a>
          </h2>
        </div>
        <a href="#projects">
          <FloatingIcon>
            <FaChevronDown size={50} />
          </FloatingIcon>
        </a>
      </HeadingContainer>
      {
      /*
        <Skills />
        <HireMe />

        ProjectsContainer below
      */
      }
      <div>
        <ProjectsHeaderContainer>
          <h2><span id="projects">Portfolio</span></h2>
          <h3><Link to="/portfolio">See All</Link></h3>
        </ProjectsHeaderContainer>
        <ProjectsContainer>
          {content.map(({ node }, index) => (index < 6 && (/^\/portfolio/.test(node.fields.slug))) && (
            <Link to={node.fields.slug} key={node.id}>
              <ProjectListing
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                startDate={node.frontmatter.startDate}
                duration={node.frontmatter.duration}
                type={node.frontmatter.type}
              />
            </Link>
          ))}
          <ProjectListing
            title="GoalTrackr"
            description="React JS, Gatsby, GraphQL"
            startDate="November 2018"
            duration="3 months"
            type="webApp"
          />
          <ProjectListing
            title="GoalTrackr"
            description="React JS, Gatsby, GraphQL"
            startDate="November 2018"
            duration="3 months"
            type="webApp"
          />
          <ProjectListing
            title="Authentication"
            description="React Native, GraphQL"
            startDate="November 2018"
            duration="3 months"
            type="mobileApp"
          />
          <ProjectListing
            title="GoalTrackr"
            description="React JS, Gatsby, GraphQL"
            startDate="November 2018"
            duration="3 months"
            type="webApp"
          />
          <ProjectListing
            title="Authentication"
            description="React Native, GraphQL"
            demoLink="/Authentication"
            blogLink="/Authentication/blog"
            startDate="November 2018"
            duration="3 months"
            type="mobileApp"
          />
          <ProjectListing
            title="GoalTrackr"
            description="React JS, Gatsby, GraphQL"
            demoLink="/GoalTrackr"
            blogLink="/GoalTrackr/blog"
            startDate="November 2018"
            duration="3 months"
            type="webApp"
          />
          <ProjectListing
            title="GoalTrackr"
            description="React JS, Gatsby, GraphQL"
            demoLink="/GoalTrackr"
            blogLink="/GoalTrackr/blog"
            startDate="November 2018"
            duration="3 months"
            type="webApp"
          />
        </ProjectsContainer>
      </div>
      <div>
        <LabsHeaderContainer>
          <h2>Code Labs</h2>
          <h3><Link to="/labs">See All</Link></h3>
        </LabsHeaderContainer>
        <LabsContainer>
          {content.map(({ node }, index) => (index < 6 && (/^\/labs/.test(node.fields.slug))) && (
            <Link to={node.fields.slug} key={node.id}>
              <LabListing
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                type={node.frontmatter.type}
              />
            </Link>
          ))}
        </LabsContainer>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(fromNow: true)
            description
            startDate
            duration
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
