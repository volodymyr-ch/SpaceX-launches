---
to: <%= absPath %>/<%= component_name %>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';

import <%= component_name %> from '.';

describe('<%= path %>', () => {
  it('renders component successfully', () => {
    const { getByLabelText } = render(<<%= component_name %> />);
    const element = getByLabelText(/test/i);
    expect(element).toBeInTheDocument();
  });
});
