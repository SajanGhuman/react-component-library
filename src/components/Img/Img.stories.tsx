import React from "react";
import { type Story } from "@storybook/react";
import Img from "./Img";
import { type ImgProps } from "./Img.types";

export default {
  title: "Image",
  component: Img,
} as const;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
