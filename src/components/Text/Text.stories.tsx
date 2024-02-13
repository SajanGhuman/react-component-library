import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import  { TextProps } from "./Text.types"
import { LabelProps } from '../Label/Label.types';

export default {
    title: "Text",
    component: Text,
  } as Meta<typeof Text>;

export const DefaultText: StoryObj<TextProps> = {
  args: {
    types: 'paragraph',
    text: 'Paragraph',
  }
}

export const DisabledText: StoryObj<LabelProps> = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
};