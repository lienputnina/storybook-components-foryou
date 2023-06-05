import { FC, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown, DropdownProps } from './components/Dropdown/Dropdown';
import { Button, ButtonProps, ButtonVariant } from './components/Button/Button';
import { TextInput, TextInputProps } from './components/TextInput/TextInput';
import {
  NumberInput,
  NumberInputProps,
} from './components/NumberInput/NumberInput';
import {
  RadioInputGroup,
  RadioInputGroupProps,
} from './components/RadioInputGroup/RadioInputGroup';
import {
  Title,
  TitleAlignment,
  TitleLevel,
  TitleProps,
} from './components/Title/Title';

interface FormsStoryComponentProps {
  titleProps: TitleProps;
  buttonProps: ButtonProps;
  textInputProps: TextInputProps;
  numberInputProps: NumberInputProps;
  dropdownProps: DropdownProps;
  radioInputGroupProps: RadioInputGroupProps;
}

const FormsStoryComponent: FC<FormsStoryComponentProps> = ({
  titleProps,
  buttonProps,
  textInputProps,
  numberInputProps,
  dropdownProps,
  radioInputGroupProps,
}: FormsStoryComponentProps) => {
  const [textInputValue, setTextInputValue] = useState(textInputProps.value);
  const [numberInputValue, setTNumberInputValue] = useState(
    numberInputProps.value,
  );
  const [dropdownValue, setDropdownValue] = useState(
    dropdownProps.selectedOptionId,
  );
  const [radioInputGroupValue, setRadioInputGroupValue] = useState(
    radioInputGroupProps.checkedOptionId,
  );

  useEffect(() => {
    setTextInputValue(textInputProps.value);
    setTNumberInputValue(numberInputProps.value);
    setDropdownValue(dropdownProps.selectedOptionId);
    setRadioInputGroupValue(radioInputGroupProps.checkedOptionId);
  }, [
    textInputProps.value,
    numberInputProps.value,
    dropdownProps.selectedOptionId,
    radioInputGroupProps.checkedOptionId,
  ]);

  return (
    <div>
      <Title
        level={TitleLevel.TWO}
        alignment={TitleAlignment.LEFT}
        {...titleProps}
        style={{ fontSize: '35px', lineHeight: '35px' }}
      />
      <TextInput
        {...textInputProps}
        value={textInputValue}
        onChange={(newValue) => {
          setTextInputValue(newValue);
          textInputProps.onChange(newValue);
        }}
        ref={undefined}
      />
      <NumberInput
        {...numberInputProps}
        value={numberInputValue}
        onChange={(newValue) => {
          setTNumberInputValue(newValue);
          numberInputProps.onChange(newValue);
        }}
        ref={undefined}
      />
      <Dropdown
        {...dropdownProps}
        selectedOptionId={dropdownValue}
        onChange={(id, value) => {
          setDropdownValue(id);
          dropdownProps.onChange(id, value);
        }}
        ref={undefined}
      />
      <RadioInputGroup
        {...radioInputGroupProps}
        checkedOptionId={radioInputGroupValue}
        onChange={(id, value) => {
          setRadioInputGroupValue(id);
          radioInputGroupProps.onChange(id, value);
        }}
        ref={undefined}
      />
      <div>
        <Button variant={ButtonVariant.PRIMARY} {...buttonProps}>
          Submit
        </Button>
        <Button variant={ButtonVariant.SECONDARY} {...buttonProps}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'FormComponents',
  component: FormsStoryComponent,
} as ComponentMeta<typeof FormsStoryComponent>;

const Template: ComponentStory<typeof FormsStoryComponent> = (args) => (
  <FormsStoryComponent {...args} />
);

export const AllFormComponents = Template.bind({});

AllFormComponents.args = {
  titleProps: {
    children: 'Sample form',
  },
  buttonProps: {
    onClick: action('Button clicked'),
  },
  textInputProps: {
    id: 'text-input-id',
    name: 'text-input-name',
    label: 'Text input',
    onChange: action('Text input updated'),
  },
  numberInputProps: {
    id: 'number-input-id',
    name: 'number-input-name',
    label: 'Number input',
    onChange: action('Number input updated'),
  },
  dropdownProps: {
    id: 'dropdown-id',
    label: 'Dropdown',
    options: [
      { id: 'option-id-1', value: 'Option 1' },
      { id: 'option-id-2', value: 'Option 2' },
      { id: 'option-id-3', value: 'Option 3' },
    ],
    onChange: action('Dropdown updated'),
  },
  radioInputGroupProps: {
    id: 'radio-button-group-id',
    label: 'Radio button group',
    options: [
      { id: 'option-id-1', value: 'option-value-1', label: 'Option 1' },
      { id: 'option-id-2', value: 'option-value-2', label: 'Option 2' },
      { id: 'option-id-3', value: 'option-value-3', label: 'Option 3' },
    ],
    onChange: action('Radio input group updated'),
  },
};
