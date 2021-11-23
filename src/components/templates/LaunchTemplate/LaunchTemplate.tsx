import React, { useState } from 'react';
import styled from 'styled-components';

import { Carousel, LaunchDetails, Loader } from 'components';

export type LaunchTemplateProps = {
  flightNumber: number;
  missionName: string;
  launchYear: number;
  details: string;
  images: string[];
  loading: boolean;
};

export const LaunchTemplate: React.FC<LaunchTemplateProps> = ({
  flightNumber,
  missionName,
  launchYear,
  details,
  images,
  loading,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Wrapper aria-label="launch-template">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Carousel
            images={images}
            currentImageIndex={currentImageIndex}
            onClick={setCurrentImageIndex}
          />
          <LaunchDetails
            flightNumber={flightNumber}
            missionName={missionName}
            launchYear={launchYear}
            details={details}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;
