import React from 'react';
import styled from 'styled-components';

export type LaunchDetailsProps = {
  flightNumber: number;
  missionName: string;
  launchYear: number;
  details: string;
};

export const LaunchDetails: React.FC<LaunchDetailsProps> = ({
  missionName,
  flightNumber,
  launchYear,
  details,
}) => (
  <Wrapper aria-label="launch-details">
    <StyledTitle>
      {`${missionName} (${launchYear} year) - launch `}
      &#8470;
      {flightNumber}
    </StyledTitle>
    <StyledDescription aria-label="description">{details}</StyledDescription>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 40px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  color: ${({ theme }) => theme.colors.text.basic};
`;

const StyledTitle = styled.h2`
  margin: 10px 0;
  font-weight: 300;
  font-size: 24px;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakPoints.mobile}) {
    font-size: 18px;
  }
`;

const StyledDescription = styled.p`
  font-size: 16px;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakPoints.mobile}) {
    font-size: 12px;
  }
`;
