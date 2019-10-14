import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

import Layout from '../components/layout';
import FloatingIcon from '../components/FloatingIcon';
// import LabListing from '../components/LabListing';
import ProjectsList from '../components/ProjectsList';

const HeadingContainer = styled.div`
  display: flex;
  height: 500px;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  padding: 2em;
  margin: 0 auto;
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 1em;
  }

  @media only screen and (min-width: 1200px) {
    padding: 2em;
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.7em;
    }
  }

  @media only screen and (min-width: 800px) {
    padding: 2em;
    justify-content: center;
    height: calc(100vh - 6em);
    h1 {
      font-size: 1.7em;
    }
    h2, p {
      font-size: 1.3em;
    }
  }
`;

const EmailText = styled.span`
  color: #0099ff;
  text-decoration: underline;
`;

// const ProjectsContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto;
//   grid-area: main;
//   grid-row-gap: 10px;
//   justify-content: start;
//   justify-items: stretch;
//   align-content: stretch;
//   justify-content: space-evenly;
//   align-items: stretch;
//   grid-auto-flow: row;
//   padding: 10px;
//   margin: 0 auto;
//
//   a {
//     text-decoration: none;
//   }
//
//   @media only screen and (min-width: 800px) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 10px;
//   }
//
//   @media only screen and (min-width: 1300px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

const ProjectsHeaderContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

// const LabsContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto;
//   grid-area: main;
//   grid-gap: 10px;
//   justify-content: start;
//   justify-items: stretch;
//   align-content: stretch;
//   grid-auto-flow: row;
//   padding: 10px;
//   margin: 0;
//
//   a {
//     text-decoration: none;
//   }
//
//   @media only screen and (min-width: 800px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//
//   @media only screen and (min-width: 1300px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;
//
// const LabsHeaderContainer = styled.div`
//   padding: 1.5em;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-end;
// `;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectCount: 0,
      labCount: 0,
    }

    this.projectsRef = React.createRef();
    this.scroll = this.scroll.bind(this);
    this.getProjectCount = this.getProjectCount.bind(this);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  getProjectCount() {
    this.setState(prevState => ({
      projectCount: prevState.projectCount + 1,
    }));
    return 0;
  }

  getLabCount() {
    const { labCount } = this.state;
    this.setState({
      labCount: labCount + 1,
    });
    return labCount;
  }

  render() {
    const { data } = this.props;

    const projects = (data.allMarkdownRemark.group[0].fieldValue === '/portfolio/') ? data.allMarkdownRemark.group[0].edges : data.allMarkdownRemark.group[1].edges;
    // const labs = (data.allMarkdownRemark.group[0].fieldValue === '/labs/') ? data.allMarkdownRemark.group[0].edges : data.allMarkdownRemark.group[1].edges;

    return (
      <Layout>
        <HeadingContainer>
          <div>
            <h1>{'Hi, I\'m a Software Developer from Fresno, California.'}</h1>
            <h1>I can help you build your next website.</h1>
            <h2>I design and build responsive full-stack web applications</h2>
            <h2>
              {'Have a project you\'d like to discuss? '}
              {'Let\'s chat! '}
              <a href="mailto:babak.chehraz@gmail.com">
                <EmailText>babak.chehraz@gmail.com</EmailText>
              </a>
            </h2>
          </div>
          <div
            onClick={() => this.scroll(this.projectsRef)}
            onKeyPress={() => this.scroll(this.projectsRef)}
            role="button"
            tabIndex={-1}
            style={{ outline: 'none' }}
          >
            <FloatingIcon>
              <FaChevronDown size={50} />
            </FloatingIcon>
          </div>
        </HeadingContainer>
        {
        /*
          <Skills />
          <HireMe />

          ProjectsContainer below
        */
        }
        <div>
          <ProjectsHeaderContainer ref={this.projectsRef}>
            <h2><span id="projects">Recent Projects</span></h2>
            <h3><Link to="/portfolio">See All</Link></h3>
          </ProjectsHeaderContainer>
          <ProjectsList projects={projects} limit={6}/>
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage;

/* for having labs
<div>
  <LabsHeaderContainer>
    <h2>Recent Articles</h2>
    <h3><Link to="/labs">See All</Link></h3>
  </LabsHeaderContainer>
  <LabsContainer>
    {labs.map(({ node }, index) => (index < 8) && (
      <Link to={node.fields.slug} key={node.id}>
        <LabListing
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          type={node.frontmatter.type}
          index={index}
        />
      </Link>
    ))}
  </LabsContainer>
</div>
*/

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      group(field: fields___parentPath) {
        fieldValue
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
  }
`;
