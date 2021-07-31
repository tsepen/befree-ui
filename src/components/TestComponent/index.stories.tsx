// import { storiesOf } from '@storybook/react-native';
// import React from 'react';
// import TestComponent from './index';

// storiesOf('Test Component', module).add('example', () => <TestComponent />);

import React from 'react';
import TestComponent from '.';

export default {
  title: 'TestComponent',
  component: TestComponent,
  argTypes: {
    background: {control: 'color'},
    color: {control: 'color'},
    onClick: {action: 'clicked'},
  },
};

const Template = (args: any) => <TestComponent {...args} />;

export const Disabled: any = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'button',
};

export const Enabled: any = Template.bind({});
Enabled.args = {
  disabled: false,
  label: 'button',
};

export const Small: any = Template.bind({});
Small.args = {
  size: 'small',
  label: 'button',
};

export const Medium: any = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'button',
};

export const Large: any = Template.bind({});
Large.args = {
  size: 'large',
  label: 'button',
};

export const Color: any = Template.bind({});
Color.args = {
  color: 'red',
  label: 'button',
};
