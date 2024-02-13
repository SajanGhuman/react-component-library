import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import Label from './Label';
import  { LabelProps } from "./Label.types"
import { ThemeProvider } from 'styled-components';

export default {
    title: "Label",
    component: Label,
  } as Meta<typeof Label>;

const Template : Story<LabelProps> = (args) => <Label {...args} />

export const Default: StoryObj<LabelProps> = {
  args: {
    htmlFor: 'my-input',
    text: 'Username:',
  },
};

export const DisabledLabel: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    disabled: true,
  },
};