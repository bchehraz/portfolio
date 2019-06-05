import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MenuButton from './MenuButton';

const Container = styled.div`
`;

const MenuOuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  z-index: ${props => (props.isOpen && 5) || -1};
  background-color: rgba(255, 255, 255, 1);

  opacity: ${props => props.isOpen || 0};
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 2em 0;

  a {
    text-decoration: none;
    max-width: 500px;
    padding: 2em 4em;
  }

  a:hover {
    background: rgba(0, 0, 0, 0);
  }

  * {
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -ms-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  closeMenu(e) {
    e.preventDefault();
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        <MenuButton isOpen={isOpen} onMouseDown={this.toggleMenu} />
        <MenuOuterContainer isOpen={isOpen} onMouseDown={this.closeMenu}>
          <Link to="/me"><h2>Me</h2></Link>
          <Link to="/portfolio"><h2>Portfolio</h2></Link>
          <Link to="/labs"><h2>Labs</h2></Link>
          <Link to="/contact"><h2>Contact Me</h2></Link>
        </MenuOuterContainer>
      </Container>
    );
  }
}

export default Menu;
