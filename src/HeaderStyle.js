import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  max-width: 100vw;
  padding: 0 80px;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;

  height: 19px;
  width: 261px;

  list-style: none;
  & li {
    /* height: 20px;
    width: 50px; */
    
  }
  
  `;

export const Link = styled.a`
  color: red;
  text-decoration: none;
  font-size: 16px;
`;
