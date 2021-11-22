---
to: <%= absPath %>/<%= component_name %>.stories.mdx
---
import { Story, Meta, Canvas } from '@storybook/addon-docs/blocks';

import <%= component_name %> from './';

export const Template = ({ ...args }) => (
  <<%= component_name %> {...args} />
);

<Meta title="<%= category %>/<%= component_name %>" component={<%= component_name %>} />

# <%= component_name %>

<Canvas>
  <Story name="default" args={{}}>
    {Template.bind({})}
  </Story>
</Canvas>
