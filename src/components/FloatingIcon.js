import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  animation: animationFrames ease-in-out 1s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;
  -webkit-animation: animationFrames ease-in-out 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: animationFrames ease-in-out 1s;
  -moz-animation-iteration-count: infinite;
  -moz-transform-origin: 50% 50%;
  -o-animation: animationFrames ease-in-out 1s;
  -o-animation-iteration-count: infinite;
  -o-transform-origin: 50% 50%;
  -ms-animation: animationFrames ease-in-out 1s;
  -ms-animation-iteration-count: infinite;
  -ms-transform-origin: 50% 50%;
  padding: 2em;

  @keyframes animationFrames{
    0% {
      transform: translate(0px,-26px);
    }
    50% {
      transform: translate(0px,-11px);
    }
    100% {
      transform: translate(0px,-26px);
    }
  }

  @-moz-keyframes animationFrames{
    0% {
      -moz-transform: translate(0px,-26px);
    }
    50% {
      -moz-transform: translate(0px,-11px);
    }
    100% {
      -moz-transform: translate(0px,-26px);
    }
  }

  @-webkit-keyframes animationFrames {
    0% {
      -webkit-transform:  translate(0px,-26px);
    }
    50% {
      -webkit-transform:  translate(0px,-11px);
    }
    100% {
      -webkit-transform:  translate(0px,-26px);
    }
  }

  @-o-keyframes animationFrames {
    0% {
      -o-transform:  translate(0px,-26px);
    }
    50% {
      -o-transform:  translate(0px,-11px);
    }
    100% {
      -o-transform:  translate(0px,-26px);
    }
  }

  @-ms-keyframes animationFrames {
    0% {
      -ms-transform: translate(0px,-26px);
    }
    50% {
      -ms-transform: translate(0px,-11px);
    }
    100% {
      -ms-transform: translate(0px,-26px);
    }
  }
`;

const FloatingIcon = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default FloatingIcon;
