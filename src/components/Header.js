import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.svg'

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt='logo' />
      <NavLink to={props.linkTo} className="header__auth">
        {props.authText}
        </NavLink>
        {console.log(props)}
    </header>
  );
};

export default Header;
