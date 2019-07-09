import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
        <h3>On the Surface</h3>
        <p>
          {"Hi, I'm Babak Chehraz, a Software Developer based in Fresno, California. "}
          {"I graduated from CSU Monterey Bay in 2017 with a B.S. in Computer Science. At this time I am seeking full-time opportunities in California!"}
          {" "}
        </p>
        <p>
          My goal with this website is to show my personal and professional coding experience, as well as <Link to="/learning"><b>{"what I'm learning"}</b></Link>.
        </p>
        <h3>Personal Life</h3>
        <p>{"I love the outdoors. I try to visit Yosemite every chance I get. Hiking and kayaking are where I am at peace. If I'm not outside, I'll either be coding, reading, listening to podcasts, or practicing guitar. "}
        {"I've been a huge gamer for most of my life and I've slowly begun to part ways with games because I would like to focus my efforts to the things in life that matter. That said, I must give credit to video games for leading me toward a career in coding!"}</p>


        <h3>Personal Challenges</h3>
        <p>
          {"I've had to overcome some difficult challenges personally since going off to college, like intense anxiety regarding my health. "}
          {"Since graduating, I've taken it upon myself to learn everything about the food I was eating to try and explain why I was feeling the way I did. "}
          {"Since putting in the effort to learn about these topics, I did what I thought I couldn't do. I lost 100 lbs and began to exercise regularly again. "}
          {"What a journey it has been. Learning about my diet changed my perspective on the various ways food affects can affect a person, not just physically but mentally, as part of an individual's environment. "}
          {"This inspired me to begin developing projects tailored to helping anyone meet their personal goals. A little bit of effort everyday goes a long way!"}

        </p>

        <p><b>Thanks for stopping by and have a wonderful day :)</b></p>

        <p>{"Now here's me with crazy hair and heavy winds at a beach near Big Sur, CA."}</p>
        <Img
          fluid={data.aboutPicture.childImageSharp.fluid}
          alt="Photo of Babak"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        />
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

export const query = graphql`
  query {
    aboutPicture: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default MePage;
