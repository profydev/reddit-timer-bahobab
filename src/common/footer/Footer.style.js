import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './footer-logo.svg';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  padding: 0 80px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(UnstyledLogo)`
  /* width: 50px;
  height: 50px; */
  margin-top: 8px;
`;

export const ALink = styled.a`
  text-decoration: none;
`;

export const Link = styled(UnstyledLink)`
  margin-left: 30px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;
