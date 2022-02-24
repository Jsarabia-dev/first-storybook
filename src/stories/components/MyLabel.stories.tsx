import {MyLabel} from "../../componenets/MyLabel";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
  title : 'UI/MyLabel',
  component: MyLabel,
  argTypes : {
    size: { control: 'select' },
    color: { control: 'select' },
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

export const Basic = Template.bind({})
Basic.args = {
  size: "normal",
  label: "Basic Label",
  allCaps: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: "normal",
  label: "Secondary Label",
  color: "text-secondary"
}

export const AllCaps = Template.bind({})
AllCaps.args = {
  size: "normal",
  label: "All Caps Label",
  allCaps: true
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  size: "normal",
  label: "Tertiary Label",
  color: "text-tertiary"
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  size: "h1",
  label: "Custom Font Color",
  color: "text-tertiary"
}
