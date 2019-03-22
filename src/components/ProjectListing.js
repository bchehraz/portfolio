import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

/*
  Determine the different types of projects you may have...
  and for each one assign a different background color
  Web app, back-end, front-end, mobile-app
*/

// Eventually its data will be retrieved with GraphQL and the Frontmatters in the .md files
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
  text-align: right;
`;

const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  border: 2px solid white;
  border-radius: 25px;
  background-color: rgba(3,3,3,0.3);
  background-color: ${props => (props.type === 'webApp' && '#aa77dd') || '#aadd77'};
  white-space: nowrap;
  width: auto;

  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${props => (props.type === 'webApp' && '#cc99ff') || '#ccff99'};
    border: 2px solid black
  }
`;

const Subheading = styled.h5`
  margin: 0;
  padding: 0;
`;

const ProjectListing = ({
  title,
  demoLink,
  blogLink,
  githubLink,
  duration,
  startDate,
  description,
  type,
}) => (
  <ListingContainer type={type}>
    <Container>
      <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
      <LinksContainer>
        <Subheading>{(type === 'mobileApp') ? 'Mobile App' : 'Web App'}</Subheading>
      </LinksContainer>
    </Container>
    <DateContainer>
      <Subheading>{startDate}</Subheading>
      <Subheading>{duration}</Subheading>
    </DateContainer>
  </ListingContainer>
);

export default ProjectListing;
