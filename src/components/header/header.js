import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';

import './header.css';


const powerpuffGirlsId = 6771;
const starTalk = 1951;
const starGate = 204;

const Header = () => (
  <header className="header">
    <h2 className="header__title">TV Maze</h2>
    <nav className="menu__links">
      <Link to={`/show/${powerpuffGirlsId}`}>
        <Button>Powerpuff Girls show</Button>
      </Link>
      <Link to={`/show/${starTalk}`}>
        <Button>StarTalk</Button>
      </Link>
      <Link to={`/show/${starGate}`}>
        <Button>Stargate SG-1</Button>
      </Link>
    </nav>
  </header>
);

Header.propTypes = {};

export default Header;
