import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getLaunchDataRequest } from 'store/actions';
import { RootState } from 'store/types';

const App = () => {
  const dispatch = useDispatch();
  const { data: launchData } = useSelector(
    ({ launches }: RootState) => launches,
  );

  useEffect(() => {
    dispatch(getLaunchDataRequest(30));
  }, []);

  useEffect(() => {
    console.log('data', launchData);
  }, [launchData]);

  return (
    <div>
      <h1>SpaceX launch</h1>
    </div>
  );
};
export default App;
