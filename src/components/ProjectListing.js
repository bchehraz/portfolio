import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: baseline;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const HeaderContainer = styled.div``

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  white-space: nowrap;
`

const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 1em;
  border: 3px solid white;
  border-radius: 0;
  background-color: rgba(3, 3, 3, 0.3);
  background-color: ${props => props.colors[1]};
  max-width: 100vw;
  min-height: 300px;

  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${props => props.colors[0]};
    color: #000;
    border-bottom-color: #333;
    padding: 1.9em 1em;
    background-color: rgba(0, ${props => props.randomValue}, 255, 0.75);
  }

  h1 {
    font-size: 2em;
  }
`

const Subheading = styled.p`
  margin: 0;
  padding: 0;
`

class ProjectListing extends React.Component {
  constructor(props) {
    super(props)

    let randomValue = 0
    const newIndex = props.index % 8

    // if (Math.floor(props.index / 8) % 2 === 0) {
    //   randomValue = Math.floor(Math.random() * 16) + 128 + (16 * (newIndex));
    // } else {
    //   randomValue = Math.floor(Math.random() * 16) + 128 + (16 * (7 - newIndex));
    // }

    if (Math.floor(props.index / 8) % 2 === 0) {
      randomValue = Math.floor(Math.random() * 16) + 128 + 16 * (7 - newIndex)
    } else {
      randomValue = Math.floor(Math.random() * 16) + 128 + 16 * newIndex
    }

    this.state = {
      colorHEX: `#00${randomValue.toString(16)}ff`,
      colorRGBA: `rgba(0, ${randomValue}, 255, 0.5)`,
      randomValue: randomValue,
    }
  }

  render() {
    const { title, duration, startDate, description, type } = this.props

    const { colorHEX, colorRGBA, randomValue } = this.state

    let subHeadingText = ''
    if (type === 'mobileApp') {
      subHeadingText = 'Mobile'
    } else if (type === 'webApp') {
      subHeadingText = 'Web'
    } else if (type === 'node') {
      subHeadingText = 'NodeJS'
    }
    return (
      <ListingContainer
        colors={[colorHEX, colorRGBA]}
        randomValue={randomValue}
      >
        <Container>
          <HeaderContainer>
            <h1>{title}</h1>
            <p>{description}</p>
          </HeaderContainer>
          <LinksContainer>
            <Subheading>{subHeadingText}</Subheading>
          </LinksContainer>
        </Container>
        <DateContainer>
          <Subheading>{startDate}</Subheading>
          <Subheading>{duration}</Subheading>
        </DateContainer>
      </ListingContainer>
    )
  }
}

ProjectListing.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ProjectListing
