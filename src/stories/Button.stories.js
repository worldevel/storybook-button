import React from 'react'
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['primary', 'secondary', 'success'] },
    size: { control: { type: 'radio' }, options: ['small', 'medium', 'large'] },
    bordered: { control: 'boolean' },
    disabled: { control: 'boolean' },
    link: { control: 'boolean' },
  },
};


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Label',
    variant: 'primary'
  },
};

export const Secondary = {
  args: {
    label: 'Label',
    variant: 'secondary'
  },
};

export const Success = {
  args: {
    label: 'Label',
    variant: 'success'
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};