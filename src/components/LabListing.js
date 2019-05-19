import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 1em;
  border: 2px solid white;
  border-radius: 25px;
  background-color: rgba(3,3,3,0.3);
  background-color: ${props => props.colors[1]};
  max-width: 100vw;
  min-height: 300px;

  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: white;
    border: 3px solid ${props => props.colors[0]};
    border-bottom-width: 1em;
    padding-bottom: 1.5em;
  }

  h1 {
    font-size: 2em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`;

const Subheading = styled.p`
  margin: 0;
  padding: 0;
`;

class LabListing extends React.Component {
  constructor(props) {
    super(props);

    let randomValue = 0;
    const newIndex = props.index % 8;

    if (Math.floor(props.index / 8) % 2 === 0) {
      randomValue = Math.floor(Math.random() * 16) + 128 + (16 * (7 - newIndex));
    } else {
      randomValue = Math.floor(Math.random() * 16) + 128 + (16 * (newIndex));
    }

    this.state = {
      colorHEX: `#00ff${randomValue.toString(16)}`,
      colorRGBA: `rgba(0, 255, ${randomValue}, 0.75)`,
    };
  }

  render() {
    const {
      title,
      date,
      type,
    } = this.props;

    const { colorHEX, colorRGBA } = this.state;
    return (
      <ListingContainer colors={[ colorHEX, colorRGBA ]}>
        <div style={{ textAlign: 'left' }}>
          <h2>{title}</h2>
        </div>
        <Container>
          <Subheading>
            {(type === 'Article') ? type : 'Code Lab'}
          </Subheading>
          <Subheading>
            {`${date}`}
          </Subheading>
        </Container>
      </ListingContainer>
    );
  }
}

export default LabListing;
