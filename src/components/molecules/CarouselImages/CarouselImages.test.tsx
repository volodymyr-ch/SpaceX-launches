import React from 'react';
import { render } from '@testing-library/react';

import { carouselDataFirstImageMock } from 'components/organisms/Carousel/Carousel.mock';
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

  describe('showing current index image', () => {
    carouselDataFirstImageMock.images.forEach((imageUrl, index) => {
      it(`should render image if ${carouselDataFirstImageMock.currentImageIndex} === ${index}`, () => {
        const { getByLabelText } = setup({ ...carouselDataFirstImageMock });

        expect(getByLabelText(`${imageUrl}-url`)).toBeInTheDocument();
      });
    });
  });
});
