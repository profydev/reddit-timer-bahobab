import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  width: 92px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  color: ${(props) => props.theme.color.light};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;
  background-color: ${(props) => props.theme.color.primary};
`;
