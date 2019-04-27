import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Menu from './menu';

const NameHeading = styled.h1`
  color: black;
  padding: 0;
  line-height: 1.5em;
  font-size: 1.7em;
  white-space: nowrap;
  margin: 0;
`;

const SubHeading = styled.h1`
  color: rgba(0, 0, 0, 0.4);
  padding: 0;
  line-height: 1em;
  font-size: 1.30em;
  white-space: nowrap;
  margin: 0;
`;

/*
style={{
  margin: '0 auto',
  width: '100%',
  maxWidth: '100%',
  padding: '0em 2em',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}}
*/
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1em 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 370px) {
    .NameHeading {
      font-size: 1.4em;
    }
    .SubHeading {
      font-size: 1em;
    }
  }

  @media only screen and (max-width: 333px) {
    .NameHeading {
      font-size: 1.2em;
    }
    .SubHeading {
      font-size: 0.8em;
    }
  }

  @media only screen and (min-width: 800px) {
    padding: 1em 2em;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0;
`;

const Name = 'Babak Chehraz';
const JobName = 'Software1Developer';

const Header = () => (
  <Container>
    <HeadingContainer>
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        <NameHeading className="NameHeading">{Name}</NameHeading>
      </Link>
      <SubHeading className="SubHeading">{JobName}</SubHeading>
    </HeadingContainer>
    <Menu />
  </Container>
);

export default Header;
