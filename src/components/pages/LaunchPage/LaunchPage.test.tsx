import React from 'react';
import { render, screen } from '@testing-library/react';
import { withStore } from 'utils';

import LaunchPage from '.';

test('render LaunchPage component successfully', () => {
  render(withStore(<LaunchPage />));

  expect(screen.getByLabelText(/launch-page/i)).toBeInTheDocument();
});
