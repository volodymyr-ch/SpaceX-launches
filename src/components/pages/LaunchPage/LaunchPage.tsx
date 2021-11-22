import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/types';
import { getLaunchDataRequest } from 'store/actions';

const launchNumber = 30;

type Props = {};

export const LaunchPage: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const { data, loading, loaded } = useSelector(
    ({ launches }: RootState) => launches,
  );

  useEffect(() => {
    dispatch(getLaunchDataRequest(launchNumber));
  }, []);

  useEffect(() => {
    console.log('data', data, loading, loaded);
  }, [data, loading, loaded]);

  return (
    <div aria-label="launch-page">
      {data.links.flickr_images.length
        ? data.links.flickr_images.map((image) => (
          <img src={image} alt="test-url" />
        ))
        : null}
    </div>
  );
};
