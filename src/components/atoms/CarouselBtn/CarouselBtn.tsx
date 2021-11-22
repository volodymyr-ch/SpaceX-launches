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
  [DirectionsType.NEXT]: <span>&gt;</span>,
  [DirectionsType.PREV]: <span>&lt;</span>,
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
  font-size: 35px;
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
  }
`;
