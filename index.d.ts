declare module 'react-native-check-box' {

  import * as React from 'react';
  import {
    ViewStyle,
    TextStyle
  } from 'react-native';

  export interface CheckBoxProps extends React.Props<CheckBoxRef> {
    onClick: (checked: boolean) => void,
    isChecked: boolean,
    isIndeterminate?: boolean,
    style?: ViewStyle,
    leftText?: string,
    leftTextView?: JSX.Element,
    rightText?: string,
    leftTextStyle?: TextStyle,
    rightTextView?: ?JSX.Element,
    rightTextStyle?: TextStyle,
    checkedImage?: JSX.Element,
    unCheckedImage?: JSX.Element,

    checkBoxColor?: string,
    uncheckBoxColor?: string;
    disabled?: boolean,
  }

  export interface CheckBoxRef extends React.Component<CheckBoxProps, void>{
    onClick():void;
  }

  export interface CheckBox extends React.ComponentClass<CheckBoxProps> {
  }

  const checkBox: CheckBox;

  export default checkBox;


}
