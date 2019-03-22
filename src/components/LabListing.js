import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  border: 2px solid white;
  border-radius: 25px;
  background-color: rgba(3,3,3,0.3);
  background-color: ${props => (props.type === 'Article' && '#aa77dd') || '#aadd77'};
  min-height: 280px;

  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${props => (props.type === 'Article' && '#cc99ff') || '#ccff99'};
    border: 2px solid black
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  white-space: nowrap;
`;

const Subheading = styled.h5`
`;

const LabListing = ({
  title,
  date,
  type,
}) => (
  <ListingContainer type={type}>
    <Container>
      <Subheading>{date}</Subheading>
      <LinksContainer>
        <Subheading>{(type === 'Article') ? type : 'Code Lab'}</Subheading>
      </LinksContainer>
    </Container>
    <div>
      <h1>{title}</h1>
    </div>
  </ListingContainer>
);

export default LabListing;
