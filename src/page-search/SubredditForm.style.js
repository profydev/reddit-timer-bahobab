import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 0 0;
`;

export const Label = styled.label`
  width: 18px;
  /* height: 9px;
  margin-right: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.font.family.default}; */
`;

export const Input = styled.input`
  width: 370px;
  height: 36px;
  background-color: #fff;
  margin: 0 10px;
  padding: 0 15px;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  color: ${(props) => props.theme.color.dark};
  font-size: ${(props) => props.theme.font.size.small};
  border: 1px solid ${(props) => props.theme.color.midLight};
`;
