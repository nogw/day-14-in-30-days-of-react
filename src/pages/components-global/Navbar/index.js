import React from 'react';
import { GiCat } from "react-icons/gi";
import { Container, Icon } from './styles';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Container>
      <Icon>
        <GiCat/>
      </Icon>
      <nav>
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/about">
        <a>About</a>
      </Link>
      </nav>
    </Container>
  );
}

export default Navbar;