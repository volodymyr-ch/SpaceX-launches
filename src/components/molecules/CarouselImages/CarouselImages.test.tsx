import React from 'react';
import { render } from '@testing-library/react';

import CarouselImages, { CarouselImagesProps } from '.';

type Props = Partial<CarouselImagesProps>;

const setup = ({ images = [], currentImageIndex = 0 }: Props = {}) =>
  render(
    <CarouselImages images={images} currentImageIndex={currentImageIndex} />,
  );

describe('molecules/CarouselImages', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = setup();

    expect(getByLabelText(/carousel-images/i)).toBeInTheDocument();
  });
});
