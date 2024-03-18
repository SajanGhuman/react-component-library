import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args} />;

//------------Default Button----------------//
export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  text: "Default Button",
};

//------------Disables Button---------------//
export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled",
  disabled: true,
};
