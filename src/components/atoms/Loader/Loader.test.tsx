import React from 'react';
import { render } from '@testing-library/react';

import Loader from '.';

describe('atoms/Loader', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = render(<Loader />);

    expect(getByLabelText(/loader/i)).toBeInTheDocument();
  });
});
