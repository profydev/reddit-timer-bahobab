import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';
import { ReactComponent as UnstyledLogo } from './logo.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.size.headerHight};
  width: 100%;
  padding: 0 80px;
`;

export const Logo = styled(UnstyledLogo)`
  margin-top: 8px;
`;

export const Link = styled(UnstyledLink)`
  margin-left: 26px;
  text-decoration: none;
  color: ${(props) => props.theme.color.midDark};
`;
