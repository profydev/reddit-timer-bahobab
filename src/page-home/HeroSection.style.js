import styled from 'styled-components';

import UnstyledButton from '../common/button';

// eslint-disable-next-line import/prefer-default-export
export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const HeroHeading = styled.h1`
  /* font-family: Bitter;
  color: #000;
  font-size: ${(props) => props.theme.font.size.large};
  line-height: 46px;
  font-style: normal;
  font-weight: 400; */
  margin: 19px 0 0;
`;

export const SubHeading = styled.h2`
  margin: 6px 0 0;
  font-family: ${(props) => props.theme.font.family.default};
  font-size: ${(props) => props.theme.font.size.default};
  color: ${(props) => props.theme.color.text};
  letter-spacing: ${(props) => props.theme.font.letterSpacing.default};
`;

export const CtaBtn = styled(UnstyledButton)`
  margin-top: 42px;
  text-decoration: none;
`;

export const DefaultSubReddit = styled.div`
  margin-top: 42px;
  font-weight: 500;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1114px;
  margin-top: 32px;
`;
