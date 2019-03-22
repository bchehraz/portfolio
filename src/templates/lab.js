import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import {
  AwesomeButton,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Layout from '../components/layout';

const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100vw;
  max-width: 1000px;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const DisqusContainer = styled.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  border: 5px dotted blue;
`;

const Disqus = styled.div`
  border: 5px dotted green;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 2em 0;
`;

const ButtonSpan = styled.span`
  padding-right: 5px;
`;

// Modify this image container when you decide to add the image component
const ImageContainer = styled.div``;

const WEB_URL = 'localhost:8000';

const Lab = ({ data }) => {
  const project = data.markdownRemark;
  const {
    title,
    date,
    type,
    ghLink,
    demoLink,
    path,
  } = project.frontmatter;

  const { slug } = project.fields;

  return (
    <Layout>
      <Container>
        <h3 style={{ color: '#333' }}>{`<${type}>`}</h3>
        <h1>{title}</h1>
        <h4 style={{ color: '#666' }}>{`Posted ${date}`}</h4>
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
        </LinkContainer>
        <ImageContainer />
        <Content
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <DisqusContainer>
          <Disqus>
            <h1>DISQUS Container</h1>
          </Disqus>
        </DisqusContainer>
      </Container>
    </Layout>
  );
};

export default Lab;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
        type
        featuredImage
        tags
        ghLink
        demoLink
        path
      }
      fields {
        slug
      }
    }
  }
`;
