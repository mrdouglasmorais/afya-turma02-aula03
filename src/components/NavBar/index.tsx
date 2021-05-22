import React from 'react';

import { Link } from 'react-router-dom'

import LogoAfya from '../../assets/img/logo.png'

const NavBar: React.FC = () => {
  return(
    <nav>
      <Link to="/">
        <img src={LogoAfya} alt="Logo Afya" />
      </Link>
      <Link to="/"> Home </Link>
      <Link to="/criar-conta"> Inscreva-se </Link>
      <Link to="/login"> Logar </Link>
    </nav>
  )
}

export default NavBar;