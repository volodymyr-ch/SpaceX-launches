import React from 'react';
import styled from 'styled-components';

export enum DirectionsType {
  NEXT = 'next',
  PREV = 'prev',
}

export type CarouselBtnProps = {
  direction: DirectionsType;
  onClick(directions: DirectionsType): void;
};

const buttonsLabel: { [key in DirectionsType]: React.ReactElement } = {
  [DirectionsType.NEXT]: <span>&#8594;</span>,
  [DirectionsType.PREV]: <span>&#8592;</span>,
};

export const CarouselBtn: React.FC<CarouselBtnProps> = ({
  direction = DirectionsType.NEXT,
  onClick,
}) => (
  <StyledBtn
    type="button"
    aria-label={`${direction}-btn`}
    onClick={() => onClick(direction)}
  >
    {buttonsLabel[direction]}
  </StyledBtn>
);

const StyledBtn = styled.button`
  width: 42px;
  height: 42px;
  border: 1px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  background: transparent;
  user-select: none;
  transition: .3s;
  &:hover {
    color: #000;
    background: #fff;
    cursor: pointer;
  }
`;
