import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './footer-logo.svg';

export const Container = styled.footer`
  width: 100%;
  height: ${(props) => props.theme.size.footerHeight};
  max-width: 980px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const linkStyle = css`
  color: ${(props) => props.theme.color.midDark};
  font-size: ${(props) => props.theme.font.size.small};
  text-decoration: none;
  flex: 1;
  
`;

export const Logo = styled(UnstyledLogo)`
  display: block;
  `;

export const LeftLink = styled(Link)`
  ${linkStyle};
  text-align: left;
`;

export const RightLink = styled(Link)`
  ${linkStyle};
  text-align: right;
`;
