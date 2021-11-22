import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { DirectionsType } from 'components/atoms/CarouselBtn';
import {
  carouselDataFirstImageMock,
  carouselDataLastImageMock,
} from './Carousel.mock';
import Carousel, { CarouselProps } from '.';

type Props = Partial<CarouselProps>;

const setup = ({
  currentImageIndex = 0,
  images = [],
  onClick = jest.fn(),
}: Props = {}) =>
  render(
    <Carousel
      currentImageIndex={currentImageIndex}
      images={images}
      onClick={onClick}
    />,
  );

describe('organisms/Carousel', () => {
  it('should render component successfully', () => {
    const { getByText } = setup();

    expect(
      getByText(/Oops... There aren`t any images of the launch./i),
    ).toBeInTheDocument();
  });

  it(`should call "onClick" function with last image index if user click ${DirectionsType.PREV} button on first image`, () => {
    const onClickSpy = jest.fn();
    const { getByLabelText } = setup({
      ...carouselDataFirstImageMock,
      onClick: onClickSpy,
    });

    const prevBtn = getByLabelText(
      new RegExp(`${DirectionsType.PREV}-btn`, 'i'),
    );

    fireEvent.click(prevBtn);

    expect(onClickSpy).toBeCalledWith(
      carouselDataFirstImageMock.images.length - 1,
    );
  });

  it(`should call "onClick" function with previous image index if user click ${DirectionsType.PREV} button on not first image`, () => {
    const onClickSpy = jest.fn();
    const { getByLabelText } = setup({
      ...carouselDataLastImageMock,
      onClick: onClickSpy,
    });

    const prevBtn = getByLabelText(
      new RegExp(`${DirectionsType.PREV}-btn`, 'i'),
    );

    fireEvent.click(prevBtn);

    expect(onClickSpy).toBeCalledWith(
      carouselDataLastImageMock.currentImageIndex - 1,
    );
  });

  it(`should call "onClick" function with first image index if user click ${DirectionsType.NEXT} button on last image`, () => {
    const onClickSpy = jest.fn();
    const firstImageIndex = 0;
    const { getByLabelText } = setup({
      ...carouselDataLastImageMock,
      onClick: onClickSpy,
    });

    const nextBtn = getByLabelText(
      new RegExp(`${DirectionsType.NEXT}-btn`, 'i'),
    );

    fireEvent.click(nextBtn);

    expect(onClickSpy).toBeCalledWith(firstImageIndex);
  });

  it(`should call "onClick" function with next image index if user click ${DirectionsType.NEXT} button on not last image`, () => {
    const onClickSpy = jest.fn();
    const { getByLabelText } = setup({
      ...carouselDataFirstImageMock,
      onClick: onClickSpy,
    });

    const nextBtn = getByLabelText(
      new RegExp(`${DirectionsType.NEXT}-btn`, 'i'),
    );

    fireEvent.click(nextBtn);

    expect(onClickSpy).toBeCalledWith(
      carouselDataFirstImageMock.currentImageIndex + 1,
    );
  });
});
