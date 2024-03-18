import React from "react";
import { Story, Meta } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "HeroImage",
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://via.placeholder.com/1200x400",
  title: "Welcome",
  subtitle: "Discover our amazing services",
  Text: "Learn More",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
