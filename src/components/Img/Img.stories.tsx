import React from "react";
import { Story, Meta } from "@storybook/react";
import Img from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Image",
  component: Img,
} as Meta<typeof Img>;

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
