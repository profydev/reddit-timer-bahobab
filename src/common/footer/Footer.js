import React from 'react';
import { Link } from 'react-router-dom';

import * as C from './Footer.style';

const Footer = () => (
  <C.Container>
    <C.LeftLink as="a" href="https://profy.dev/employers" target="_blank" rel="noreferrer">profy.dev</C.LeftLink>

    <Link to="/">
      <C.Logo />
    </Link>

    <C.RightLink to="/terms" style={{ textAlign: 'right' }}>Terms & Privacy</C.RightLink>
  </C.Container>
);

export default Footer;
