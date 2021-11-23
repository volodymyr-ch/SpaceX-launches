import React from 'react';
import { render } from '@testing-library/react';

import CarouselDots, { CarouselDotsProps } from '.';

type Props = Partial<CarouselDotsProps>;

const setup = ({
  imagesLength = 0,
  currentImageIndex = 0,
  onClick = jest.fn(),
}: Props = {}) =>
  render(
    <CarouselDots
      imagesLength={imagesLength}
      currentImageIndex={currentImageIndex}
      onClick={onClick}
    />,
  );

describe('molecules/CarouselDots', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = setup();

    expect(getByLabelText(/carousel-dots/i)).toBeInTheDocument();
  });

  describe('dots showing', () => {
    const dataMock = {
      imagesLength: 10,
      currentImageIndex: 2,
    };
    Array.from(Array(dataMock.imagesLength).keys()).forEach((image) => {
      it(`should render dot ${image} successfully`, () => {
        const { getByLabelText } = setup({ ...dataMock });

        expect(
          getByLabelText(new RegExp(`dot-${image}`, 'i')),
        ).toBeInTheDocument();
      });
    });
  });
});
