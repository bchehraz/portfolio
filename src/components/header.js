import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Menu from './menu';

const NameHeading = styled.h1`
  color: black;
  padding: 0;
  line-height: 0;
  font-size: 1.7em;
  font-family: 'Merriweather', serif;
`;

const SubHeading = styled.h1`
  color: gray;
  padding: 0;
  line-height: 1.28em;
  font-size: 1.28em;
  font-family: 'Merriweather', serif
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2em 0;
`;

const Name = 'Babak Chehraz';
const JobName = 'Software Developer';

const Header = () => (
  <div
    style={{
      background: 'rgba(0,0,0,0)',
      marginBottom: '1.45rem',
      borderTop: '3px solid #0099ff',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '1em 2em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <Container>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <NameHeading>{Name}</NameHeading>
        </Link>
        <SubHeading>{JobName}</SubHeading>
      </Container>
      <Menu />
    </div>
  </div>
);

export default Header;
