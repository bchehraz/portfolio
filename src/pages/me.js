import React from 'react';
import { Link, graphql } from 'gatsby';
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

const MePage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>About me</h1>
        <p>{'I\'m Babak Chehraz, a full-stack software developer based in Fresno, California. I currently work as a software freelancer, specializing in React, GraphQL, and everything JavaScript.'}</p>
        <p>I started this website to primarily share my work as a developer, but have since added articles to share knowledge and insight.</p>
        <p>I was inspired by Tania Rascia (<a href="https://www.taniarascia.com/" target="_blank" rel="noopener noreferrer">see her page here</a>) to begin sharing my journey as well as <Link to="/learning">{'what I\'m learning'}</Link> with the world.</p>
        {
          //insert image of self here

          //insert social links here "Around the Web"

          //insert Links to useful pages? Other developers? Idk...

          //insert links to "Music" that I'm into right now

          // Add a timeline...

          // Add Published Articles if I have any (ok now I'm just copying her layout exactly lol)

          // Add "Currently Using" section
        }
      </Container>
    </Layout>
  );
};

export default MePage;
