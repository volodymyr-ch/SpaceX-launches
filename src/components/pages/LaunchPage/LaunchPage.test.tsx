import React from 'react';
import { render, screen } from '@testing-library/react';
import { withStore, withThemeProvider } from 'utils';

import LaunchPage from '.';

test('render LaunchPage component successfully', () => {
  render(withStore(withThemeProvider(<LaunchPage />)));

  expect(screen.getByLabelText(/launch-page/i)).toBeInTheDocument();
});
