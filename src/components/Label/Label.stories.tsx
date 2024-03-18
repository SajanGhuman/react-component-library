import { type StoryObj } from "@storybook/react";
import Label from "./Label";
import { type LabelProps } from "./Label.types";

export default {
  title: "Label",
  component: Label,
} as const;

export const Default: StoryObj<LabelProps> = {
  args: {
    htmlFor: "my-input",
    text: "Username:",
  },
};

export const DisabledLabel: StoryObj<LabelProps> = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
