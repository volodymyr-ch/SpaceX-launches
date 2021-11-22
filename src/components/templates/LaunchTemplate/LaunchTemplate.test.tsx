import React from 'react';
import { render } from '@testing-library/react';

import { launchTemplateDataMock } from './LaunchTemplate.mock';
import LaunchTemplate, { LaunchTemplateProps } from '.';

type Props = Partial<LaunchTemplateProps>;

const setup = ({
  flightNumber = 0,
  missionName = '',
  launchYear = 0,
  images = [],
}: Props = {}) =>
  render(
    <LaunchTemplate
      flightNumber={flightNumber}
      missionName={missionName}
      launchYear={launchYear}
      images={images}
    />,
  );

describe('templates/LaunchTemplate', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = setup({ ...launchTemplateDataMock });

    expect(getByLabelText(/launch-template/i)).toBeInTheDocument();
  });
});
