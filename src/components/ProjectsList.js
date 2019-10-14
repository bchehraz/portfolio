import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import ProjectListing from './ProjectListing';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  justify-content: start;
  justify-items: stretch;
  align-content: stretch;
  grid-auto-flow: row;
  padding: 1em;
  margin: 0;

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectsList = (props) => {
  const { projects, limit } = props;
  return (
    <Container>
      {projects.map(({ node }, index) => {
        let limitReached = (limit !== undefined && index >= limit);
        const {
          title,
          description,
          startDate,
          duration,
          type
        } = node.frontmatter;
        return (!limitReached) && (
          <Link to={node.fields.slug} key={node.id}>
            <ProjectListing
              title={title}
              description={description}
              startDate={startDate}
              duration={duration}
              type={type}
              index={index}
            />
          </Link>
        );
      })}
    </Container>
  );
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
  limit: PropTypes.number,
}

export default ProjectsList;
