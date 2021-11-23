import React from 'react';
import { render } from '@testing-library/react';

import { withThemeProvider } from 'utils';
import { launchDetailsMock } from './LaunchDetails.mock';
import LaunchDetails, { LaunchDetailsProps } from '.';

type Props = Partial<LaunchDetailsProps>;

const setup = ({
  missionName = '',
  flightNumber = 0,
  launchYear = 0,
  details = '',
}: Props = {}) =>
  render(
    withThemeProvider(
      <LaunchDetails
        missionName={missionName}
        flightNumber={flightNumber}
        launchYear={launchYear}
        details={details}
      />,
    ),
  );

describe('molecules/LaunchDetails', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = setup();

    expect(getByLabelText(/launch-details/i)).toBeInTheDocument();
  });

  it('should render launch info successfully', () => {
    const { getByText, getByLabelText } = setup({ ...launchDetailsMock });

    expect(
      getByText(new RegExp(`${launchDetailsMock.missionName}`, 'i')),
    ).toBeInTheDocument();
    expect(
      getByText(new RegExp(`${launchDetailsMock.flightNumber}`, 'i')),
    ).toBeInTheDocument();
    expect(
      getByText(new RegExp(`${launchDetailsMock.launchYear}`, 'i')),
    ).toBeInTheDocument();
    expect(getByLabelText(/description/i)).toBeInTheDocument();
  });
});
