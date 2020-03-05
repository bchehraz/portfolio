import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Layout from '../components/layout';

const Container = styled.div`
  padding: 1em 1em;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
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
  justify-content: flex-start;
  align-items: baseline;
`;

const Content = styled.div`
  padding: 0 0;
  text-align: justify;
`;

const ButtonSpan = styled.div`
  padding: 5px;
  padding-right: 5px;
`;

const AuthorContainer = styled.div`
  border-top: 2px solid black;
  padding: 1em 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 800px) {
    flex-flow: row nowrap;
  }
`;

const AuthorImage = styled.div`
  min-width: 2.9rem;
  height: 2.9rem;
  margin: 0 auto;

  @media only screen and (min-width: 800px) {
    margin-top: -1.5rem;
  }
`;

const Author = styled.div`
  padding: 1em;
  margin: 0 auto;
  min-width: 200px;
`;

// Modify this image container when you decide to add the image component
const ImageContainer = styled.div`
  padding: 1em;
  margin: 0 auto;
`;

const WEB_URL = 'localhost:8000';

const Lab = ({ data }) => {
  const project = data.markdownRemark;
  const {
    title,
    date,
    type,
  //  ghLink,
  //  demoLink,
  } = project.frontmatter;

  const { slug } = project.fields;

  return (
    <Layout>
      <Container>
        <h3 style={{ color: '#333' }}>{`<${type}>`}</h3>
        <h1>{title}</h1>
        <h4 style={{ color: '#666' }}>{`Posted ${date}`}</h4>
        <LinkContainer>
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
        </LinkContainer>
        <ImageContainer />
        <Content
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <AuthorContainer>
          <AuthorImage>
            <Img
              fluid={data.authorPicture.childImageSharp.fluid}
              alt="Babak's profile pic"
              style={{
                borderRadius: '100%',
                width: '100%',
                height: '100%',
              }}
            />
          </AuthorImage>
          <Author>
            <p>
              <b>Babak Chehraz </b>
              is a Software Developer based in Fresno, California. You should follow him on&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/babak.dev">Instagram</a>
            </p>
          </Author>
        </AuthorContainer>
      </Container>
    </Layout>
  );
};

Lab.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Lab;

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(fromNow: true)
//         type
//         featuredImage
//         tags
//         ghLink
//         demoLink
//         path
//       }
//       fields {
//         slug
//       }
//     }
//   }
// `;

// authorPicture: file(relativePath: { eq: "author.jpg" }) {
//   childImageSharp {
//     fluid(maxWidth: 500, maxHeight: 500) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }