import React from 'react';
import { render } from '@testing-library/react';

import { carouselDataFirstImageMock } from 'components/organisms/Carousel/Carousel.mock';
import CarouselImage, { CarouselImageProps } from '.';

type Props = Partial<CarouselImageProps>;

const setup = ({ imageUrl = '' }: Props = {}) =>
  render(<CarouselImage imageUrl={imageUrl} />);

describe('atoms/CarouselImage', () => {
  it('renders component successfully', () => {
    const imageUrl = carouselDataFirstImageMock.images[0];
    const { getByLabelText } = setup({ imageUrl });

    const image = getByLabelText(new RegExp(`carousel-image-${imageUrl}`, 'i'));

    expect(image).toBeInTheDocument();
  });
});
