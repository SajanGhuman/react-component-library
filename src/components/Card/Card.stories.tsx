import React from "react";
import { type Story } from "@storybook/react";
import Card from "./Card";
import { type CardProps } from "./Card.types";

export default {
  title: "Card",
  component: Card,
} as const;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageurl: "https://placehold.co/300x300",
  title: "Card Title",
  content: "Card description",
  buttonText: "Click Me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageurl: "https://placehold.co/300x300",
  title: "Card Title",
  content: "Card description",
  buttonText: "Click Me",
  disabled: true,
};
