import React from 'react';
import { NavigationBurgerWrapper, NavigationBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

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
