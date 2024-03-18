import React from "react";
import { Radio } from "./Radio";

export default {
  title: "Radio",
  component: Radio,
};

export const Default: React.FC = () => (
  <Radio id="radio1" name="radio" value="value1" />
);
export const Disabled: React.FC = () => (
  <Radio id="radio2" name="radio" value="value2" disabled />
);
