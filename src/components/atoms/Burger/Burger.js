import React from 'react';
import { bool, func } from 'prop-types';
import { NavigationBurgerWrapper, NavigationBurger } from './Burger.styled';

const Burger = ({ open, toggleNavigation }) => {
  return (
    <NavigationBurgerWrapper>
      <NavigationBurger open={open} onClick={() => toggleNavigation()}>
        <div />
        <div />
        <div />
      </NavigationBurger>
    </NavigationBurgerWrapper>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  toggleNavigation: func.isRequired,
};

export default Burger;
