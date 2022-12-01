import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonVariant } from './Button';
import { WithGrayBackground } from '../../hoc/WithGrayBackground';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <WithGrayBackground>
    <Button {...args} />
    <Button {...args} />
  </WithGrayBackground>
);

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  children: 'Children',
  variant: ButtonVariant.PRIMARY,
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  ...Primary.args,
  variant: ButtonVariant.SECONDARY,
};
