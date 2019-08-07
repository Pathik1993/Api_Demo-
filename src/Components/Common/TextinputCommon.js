import React, { Component } from "react";
import { View, TextInput } from "react-native";

export default class TextinputCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBackText() {
    const { value, onChangeText, placeholder, style, secureTextEntry, ref, returnKeyType, onSubmitEditing } = this.props;
    return (
      <TextInput
        value={value}
        ref={ref}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        style={{
          color: global.black,
          fontSize: global.fontSize_14,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          marginBottom: 10,
          width: 200,
          height: 44
        }}
      />
    );
  }

  render() {
    return <View>{this.renderBackText()}</View>;
  }
}
