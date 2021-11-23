import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'store/types';
import { getLaunchDataRequest } from 'store/actions';
import { LaunchTemplate } from 'components';

type Props = {};

export const LaunchPage: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    ({ launches }: RootState) => launches,
  );

  const onLaunchIdChange = (id: number): void => {
    dispatch(getLaunchDataRequest(id));
  };

  return (
    <Wrapper aria-label="launch-page">
      <LaunchTemplate
        flightNumber={data.flight_number}
        missionName={data.mission_name}
        launchYear={data.launch_year}
        details={data.details}
        images={data.links.flickr_images}
        loading={loading}
        onLaunchIdChange={onLaunchIdChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;
