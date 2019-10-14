import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  AwesomeButton,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Layout from '../components/layout';

const Container = styled.div`
  padding: 1em 1em;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100vw;
  max-width: 1000px;

  @media only screen and (min-width: 800px) {
    padding: 1em 2em;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  div:nth-child(2) {
    display: flex;
    flex-flow: column nowrap;
  }
  div:first-child {
    display: flex;
    flex-flow: column nowrap;
  }

  @media only screen and (min-width: 650px) {
    div:nth-child(2),
    div:first-child {
      flex-flow: row nowrap;
    }
  }

  @media only screen and (min-width: 500px) {
    div:first-child {
      flex-flow: row nowrap;
    }
  }
`;

const Content = styled.div`
  padding: 1em 0;
`;

const ButtonSpan = styled.span`
  padding-right: 5px;
`;

// Modify this image container when you decide to add the image component
const ImageContainer = styled.div``;

const Project = ({ data }) => {
  const project = data.markdownRemark;
  const {
    title,
    description,
    demoLink,
    ghLink,
  } = project.frontmatter;
  const blogLink = null;
  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <LinkContainer>
          <div>
            {(demoLink) && (
              <ButtonSpan>
                <AwesomeButton
                  ripple
                  href={demoLink}
                  target="_blank"
                >
                  Demo
                </AwesomeButton>
              </ButtonSpan>
            )}
            {(blogLink) && (
              <Link to={blogLink}>
                <ButtonSpan>
                  <AwesomeButton
                    type="secondary"
                    ripple
                  >
                    View Article
                  </AwesomeButton>
                </ButtonSpan>
              </Link>
            )}
            {(ghLink) && (
              <ButtonSpan>
                <AwesomeButtonSocial
                  type="github"
                  ripple
                  href={ghLink}
                  target="_blank"
                >
                  View Source
                </AwesomeButtonSocial>
              </ButtonSpan>
            )}
          </div>
        </LinkContainer>
        <ImageContainer />
        <Content
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </Container>
    </Layout>
  );
};

/* SOCIAL SHARE BUTTONS
<div>
  <ButtonSpan>
    <AwesomeButtonSocial
      type="facebook"
      url={`${WEB_URL}${slug}`}
      ripple
    />
  </ButtonSpan>
  <ButtonSpan>
    <AwesomeButtonSocial
      type="twitter"
      url={`${WEB_URL}${slug}`}
      ripple
    />
  </ButtonSpan>
  <ButtonSpan>
    <AwesomeButtonSocial
      type="gplus"
      url={`${WEB_URL}${slug}`}
      ripple
    />
  </ButtonSpan>
</div>
*/

Project.propTypes = {
  data: PropTypes.object.isRequired,
  tags: PropTypes.array,
}

export default Project;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        tags
        startDate
        type
        demoLink
        ghLink
        duration
      }
      fields {
        slug
      }
    }
  }
`;
