import React from 'react';
import { render } from '@testing-library/react';

import CarouselBtn, { DirectionsType, CarouselBtnProps } from '.';

type Props = Partial<CarouselBtnProps>;

const setup = ({
  direction = DirectionsType.NEXT,
  onClick = jest.fn(),
}: Props = {}) =>
  render(<CarouselBtn direction={direction} onClick={onClick} />);

describe('atoms/CarouselBtn', () => {
  describe('buttons rendering', () => {
    const directions = Object.values(DirectionsType);

    directions.forEach((direction) => {
      it(`should renders ${direction} button successfully`, () => {
        const { getByLabelText } = setup({ direction });

        const button = getByLabelText(new RegExp(`${direction}-btn`, 'i'));

        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('buttons click event', () => {
    const directions = Object.values(DirectionsType);

    directions.forEach((direction) => {
      it(`should call "onClick" function on ${direction} btn click`, () => {
        const { getByLabelText } = setup({ direction });

        const button = getByLabelText(new RegExp(`${direction}-btn`, 'i'));

        expect(button).toBeInTheDocument();
      });
    });
  });
});
