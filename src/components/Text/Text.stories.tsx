import { type StoryObj } from "@storybook/react";
import Text from "./Text";
import { type TextProps } from "./Text.types";
import { type LabelProps } from "../Label/Label.types";

export default {
  title: "Text",
  component: Text,
} as const;

export const DefaultText: StoryObj<TextProps> = {
  args: {
    types: "paragraph",
    text: "Paragraph",
  },
};

export const DisabledText: StoryObj<LabelProps> = {
  args: {
    text: "Disabled",
    disabled: true,
  },
};
