import React from 'react';
import { CarouselImage } from 'components';

export type CarouselImagesProps = {
  images: string[];
  currentImageIndex: number;
};

export const CarouselImages: React.FC<CarouselImagesProps> = ({
  images,
  currentImageIndex,
}) => (
  <div aria-label="carousel-images">
    {images.map((imageUrl, index) =>
      (index === currentImageIndex ? (
        <CarouselImage key={imageUrl} imageUrl={imageUrl} />
      ) : null))}
  </div>
);
