import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const NavigationBurgerWrapper = styled.div`
  position: fixed;
  top: 10%;
  right: 0;
  height: 45px;
  width: 45px;
  border-left: 2px solid ${({ theme }) => theme.colors.primaryViolet};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryViolet};
  border-top: 2px solid ${({ theme }) => theme.colors.primaryViolet};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 0px 3px 10px -1px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.secondaryWhite};
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.responsive.lg}) {
    display: none;
  }
`;

const NavigationBurger = styled.button`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primaryViolet};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

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
