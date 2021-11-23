import React from 'react';
import styled from 'styled-components';

export type CarouselDotsProps = {
  currentImageIndex: number;
  imagesLength: number;
  onClick(index: number): void;
};

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  currentImageIndex,
  imagesLength,
  onClick,
}) => {
  const onDotClick = (index: number) => {
    if (index !== currentImageIndex) {
      onClick(index);
    }
  };

  return (
    <Wrapper aria-label="carousel-dots">
      {Array.from(Array(imagesLength).keys()).map((value, index) => (
        <StyledCarouselDot
          key={`dot-${value}`}
          aria-label={`dot-${value}`}
          isActive={currentImageIndex === index}
          onClick={() => onDotClick(index)}
        >
          o
        </StyledCarouselDot>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const StyledCarouselDot = styled.li<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  background-color: #fff;
  color: transparent;
  margin: 0 6px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: .3s;
  ${({ isActive }) => (isActive ? 'background-color: transparent;' : null)}
  &:hover {
    background-color: transparent;
  }
`;
