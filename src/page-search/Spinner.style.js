import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(350deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 77px;
  height: 77px;
  margin-top: 56px;
  animation: ${spinner} 1.5s linear infinite;
`;

export const Image = styled.img`
  width: 100%;
`;
