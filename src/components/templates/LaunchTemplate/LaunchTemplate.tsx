import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Carousel,
  LaunchDetails,
  Loader,
} from 'components';

export type LaunchTemplateProps = {
  flightNumber: number;
  missionName: string;
  launchYear: number;
  details: string;
  images: string[];
  loading: boolean;
  onLaunchIdChange(id: number): void;
};

const defaultCarouselImageIndex = 0;
const defaultLaunchId = 44;
const firstLaunchId = 1;
const lastLaunchId = 110;

export const LaunchTemplate: React.FC<LaunchTemplateProps> = ({
  flightNumber,
  missionName,
  launchYear,
  details,
  images,
  loading,
  onLaunchIdChange,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(defaultCarouselImageIndex);
  const [launchId, setLaunchId] = useState(defaultLaunchId);

  useEffect(() => {
    setCurrentImageIndex(defaultCarouselImageIndex);
    onLaunchIdChange(launchId);
  }, [launchId]);

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
          <ButtonsWrapper>
            <Button
              label={`Go to prev launch (${flightNumber - 1})`}
              disabled={launchId === firstLaunchId}
              onClick={() => setLaunchId(launchId - 1)}
            />
            <StyledNextBtn>
              <Button
                label={`Go to next launch (${flightNumber + 1})`}
                disabled={launchId === lastLaunchId}
                onClick={() => setLaunchId(launchId + 1)}
              />
            </StyledNextBtn>
          </ButtonsWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const ButtonsWrapper = styled.div`
  padding: 0 40px 40px;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakPoints.mobile}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
`;

const StyledNextBtn = styled.div`
  display: inline;
  padding-left: 10px;
`;
