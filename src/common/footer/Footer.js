import React from 'react';
// import { Link } from 'react-router-dom';

import * as C from './Footer.style';

const Footer = () => (
  <C.Container>
    <C.ALink href="https://profy.dev/employers" target="_blank" rel="noreferrer">https://profy.dev/employers</C.ALink>

    {/* <Link to="/">
      <C.Logo />
    </Link> */}

    <C.Link to="/terms">Terms & Privacy</C.Link>
  </C.Container>
);

export default Footer;
