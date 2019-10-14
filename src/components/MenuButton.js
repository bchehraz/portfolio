import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  height: 40px;
  margin: 0 auto;
  width: 50px;
  z-index: 6;
`;

const Bar = styled.div`
  width: 80%;
  height: 8px;
  background-color: black;
  border-radius: 20px;
  &:first-child {
    width: 100%;
  }
  &:last-child {
    width: 60%;
  }
`;

const Container = styled.div`
  max-width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  cursor: pointer;
`;

const MenuButtonText = styled.span`
  padding: 0;
`;

const MenuButtonClose = styled.div`
  z-index: 6;
`;

const openButton = (
  <Burger>
    <Bar />
    <Bar />
    <Bar />
  </Burger>
);

const closeButton = (
  <Burger>
    <MenuButtonClose>
      <h1>X</h1>
    </MenuButtonClose>
  </Burger>
);

const MenuButton = ({ isOpen, onMouseDown }) => (
  <Container onMouseDown={onMouseDown}>
    <Burger>
      {!isOpen ? openButton : closeButton}
    </Burger>
    <MenuButtonText />
  </Container>
);

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
}

export default MenuButton;
