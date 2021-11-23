import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {};

export const Loader: React.FC<Props> = () => (
  <Wrapper aria-label="loader">
    <StyledLoader>
      <div />
      <div />
      <div />
      <div />
    </StyledLoader>
  </Wrapper>
);

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const StyledLoader = styled.div`c
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 1px solid #fff;
    border-radius: 50%;
    animation: ${loaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(2) {
      animation-delay: -0.15s;
    }
  }
`;
