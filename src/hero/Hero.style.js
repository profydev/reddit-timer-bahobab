import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroHeading = styled.h1`
  font-family: Bitter;
  color: #000;
  font-size: 38px;
  line-height: 46px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const SubHeading = styled.h3`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
`;

export const CtaBtn = styled.button`
  width: 217px;
  height: 36px;
  margin-bottom: 45px;
  border: none;
  line-height: 9px;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding-top: 13px;
  text-decoration: none;
  background-color: #FDB755;
  cursor: pointer;
`;

export const DefaultSubReddit = styled.div`
  margin-bottom: 42px;
  font-weight: 500;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 1114px;
`;
