import React from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  label: string;
  disabled: boolean;
  onClick(): void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  onClick,
}) => (
  <Wrapper type="button" disabled={disabled} onClick={onClick}>
    {label}
  </Wrapper>
);

const Wrapper = styled.button`
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  &:hover {
    color: #000;
    background: #fff;
    cursor: pointer;
  }
  @media only screen and (max-width: ${({ theme }) =>
    theme.breakPoints.mobile}) {
    font-size: 12px;
  }
  font-family: ${({ theme }) => theme.fonts.mainFont};
`;
