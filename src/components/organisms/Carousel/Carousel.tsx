import React from 'react';
import styled from 'styled-components';

import { CarouselBtn, CarouselImages, CarouselDots } from 'components';
import { DirectionsType } from 'components/atoms/CarouselBtn';

export type CarouselProps = {
  currentImageIndex: number;
  images: string[];
  onClick(index: number): void;
};

export const Carousel: React.FC<CarouselProps> = ({
  currentImageIndex = 0,
  images,
  onClick,
}) => {
  const directionsClickEvent: {
    [key in DirectionsType]: () => void;
  } = {
    [DirectionsType.NEXT]: () => {
      const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

      return onClick(newIndex);
    },
    [DirectionsType.PREV]: () => {
      const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

      return onClick(newIndex);
    },
  };

  const onButtonClick = (direction: DirectionsType) => {
    directionsClickEvent[direction]();
  };

  if (!images.length) {
    return <StyledEmptyBox>Oops... There aren`t any images of the launch.</StyledEmptyBox>;
  }

  return (
    <Wrapper aria-label="carousel-wrapper">
      <StyledPrevBtn>
        <CarouselBtn direction={DirectionsType.PREV} onClick={onButtonClick} />
      </StyledPrevBtn>
      <StyledNextBtn>
        <CarouselBtn direction={DirectionsType.NEXT} onClick={onButtonClick} />
      </StyledNextBtn>
      <StyledCarouselDots>
        <CarouselDots
          currentImageIndex={currentImageIndex}
          imagesLength={images.length}
          onClick={onClick}
        />
      </StyledCarouselDots>
      <CarouselImages images={images} currentImageIndex={currentImageIndex} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  max-height: 100vh;
  overflow: hidden;
  margin: auto;
`;

const StyledNextBtn = styled.div`
  position: absolute;
  right: 24px;
  cursor: pointer;
  z-index: 3;
`;

const StyledPrevBtn = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
  z-index: 3;
`;

const StyledCarouselDots = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  z-index: 3;
`;

const StyledEmptyBox = styled.span`
  display: block;
  margin-top: 10px;
  padding: 40px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.text.basic};
`;
