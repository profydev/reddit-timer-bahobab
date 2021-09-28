import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SearchWraper = styled.div`
  max-width: 100%;
  width: 611px;
  height: 111px;
  margin: 27px auto;
  text-align: center;
`;

export const Form = styled.form`
  width: 500px;
`;

export const Label = styled.label`
  width: 18px;
  height: 9px;
  margin-right: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.font.family.default};
`;

export const Input = styled.input`
  width: 370px;
  height: 36px;
  color: ${(props) => props.theme.color.text};
  background-color: #fff;
  margin-right: 10px;
  padding-left: 17px;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
`;

export const Button = styled.button`
  width: 92px;
  height: 36px;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.color.light};
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.small};
  font-weight: 500;
  background-color: ${(props) => props.theme.color.primary};
`;
