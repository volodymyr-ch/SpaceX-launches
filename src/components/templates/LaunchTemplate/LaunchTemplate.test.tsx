import React from 'react';
import { render } from '@testing-library/react';

import { withThemeProvider } from 'utils';
import { launchTemplateDataMock } from './LaunchTemplate.mock';
import LaunchTemplate, { LaunchTemplateProps } from '.';

type Props = Partial<LaunchTemplateProps>;

const setup = ({
  flightNumber = 0,
  missionName = '',
  launchYear = 0,
  details = '',
  images = [],
  loading = false,
  onLaunchIdChange = jest.fn(),
}: Props = {}) =>
  render(
    withThemeProvider(
      <LaunchTemplate
        flightNumber={flightNumber}
        missionName={missionName}
        launchYear={launchYear}
        details={details}
        images={images}
        loading={loading}
        onLaunchIdChange={onLaunchIdChange}
      />,
    ),
  );

describe('templates/LaunchTemplate', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = setup({ ...launchTemplateDataMock });

    expect(getByLabelText(/launch-template/i)).toBeInTheDocument();
  });
});
