import React, { useState } from 'react';
import styled from 'styled-components';

import { Carousel, Loader } from 'components';

export type LaunchTemplateProps = {
  flightNumber: number;
  missionName: string;
  launchYear: number;
  images: string[];
  loading: boolean;
};

export const LaunchTemplate: React.FC<LaunchTemplateProps> = ({
  flightNumber,
  missionName,
  launchYear,
  images,
  loading,
}) => {
  console.log('test', flightNumber, missionName, launchYear);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Wrapper aria-label="launch-template">
      {loading ? (
        <Loader />
      ) : (
        <Carousel
          images={images}
          currentImageIndex={currentImageIndex}
          onClick={setCurrentImageIndex}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;
