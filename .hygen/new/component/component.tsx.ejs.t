---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';

type Props = {};

export const <%= component_name %>: React.FC<Props> = (props) => (
  <div aria-label="test"><%= component_name %></div>
);
