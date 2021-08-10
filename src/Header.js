import React from 'react';
// import { Link } from 'react-router-dom';
import { HeaderWrapper, Link, Nav } from './HeaderStyle';

function Header() {
  return (
    <HeaderWrapper>
      <Link href="/">
        <img src="img/logo.png" alt="logo" />
      </Link>
      <Nav>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#how-it-works">How it works</Link></li>
        <li><Link href="/search/javascript">Search</Link></li>

      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
