import React from 'react';
import { NavigationBurgerWrapper, NavigationBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    return (
        <NavigationBurgerWrapper>
            <NavigationBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </NavigationBurger>
        </NavigationBurgerWrapper>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;