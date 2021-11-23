import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/types';
import { getLaunchDataRequest } from 'store/actions';
import { LaunchTemplate } from 'components';

const launchNumber = 44;

type Props = {};

export const LaunchPage: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(
    ({ launches }: RootState) => launches,
  );

  useEffect(() => {
    dispatch(getLaunchDataRequest(launchNumber));
  }, []);

  return (
    <div aria-label="launch-page">
      <LaunchTemplate
        flightNumber={data.flight_number}
        missionName={data.mission_name}
        launchYear={data.launch_year}
        images={data.links.flickr_images}
        loading={loading}
      />
    </div>
  );
};
