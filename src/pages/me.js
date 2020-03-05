import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
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

const MePage = () => {
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
          My goal with this website is to show my personal and professional coding experience, as well as <Link to="/learning"><b>{"what I'm learning"}</b></Link> and <Link to="/links"><b>Links to Useful Sites</b></Link>.
        </p>
        <h3>Personal Life</h3>
        <p>{"I love being out in nature. I try to visit Yosemite every chance I get. Hiking and kayaking are where I am at peace. If I'm not exploring, I'll either be coding, reading, listening to podcasts, or practicing guitar. You might catch me at the local coffee shop working on a project!"}
        {""}</p>

        <p><b>Thanks for stopping by and have a wonderful day :)</b></p>

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

MePage.propTypes = {
  data: PropTypes.object.isRequired,
}

/*

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

*/

// export const query = graphql`
//   query {
//     aboutPicture: file(relativePath: { eq: "me.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 500, maxHeight: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default MePage;
