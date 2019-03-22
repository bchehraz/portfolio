import React from 'react';
import styled from 'styled-components';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import Layout from '../components/layout';
import Contact from '../components/Contact';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  padding: 4px;
  white-space: nowrap;
`;

const ContactPage = () => (
  <Layout showFooter={false}>
    <Container>
      <h1>Get in touch</h1>
      <p>
        {'If you wanna get in touch, talk to me about a project collaboration or just say hi, fill out the form below or send an email to babak.dev@gmail.com and let\'s talk.'}
      </p>
      <Contact />

      <h2>{'Let\'s get social'}</h2>
      <p>Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.</p>
      <div>
        <ButtonContainer>
          <AwesomeButtonSocial
            type="linkedin"
            ripple
            href="https://www.linkedin.com/in/babakchehraz"
            target="_blank"
            size="large"
          >
            LINKEDIN
          </AwesomeButtonSocial>
        </ButtonContainer>
        <ButtonContainer>
          <AwesomeButtonSocial
            type="github"
            ripple
            href="https://www.github.com/bchehraz"
            target="_blank"
            size="large"
          >
            GITHUB
          </AwesomeButtonSocial>
        </ButtonContainer>
        <ButtonContainer>
          <AwesomeButtonSocial
            type="facebook"
            ripple
            href="https://www.facebook.com"
            target="_blank"
            size="large"
          >
            FACEBOOK
          </AwesomeButtonSocial>
        </ButtonContainer>
        <ButtonContainer>
          <AwesomeButtonSocial
            type="instagram"
            ripple
            href="https://www.instagram.com/babakthedev"
            target="_blank"
            size="large"
          >
            INSTAGRAM
          </AwesomeButtonSocial>
        </ButtonContainer>
      </div>
    </Container>
  </Layout>
);

export default ContactPage;
