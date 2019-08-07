import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import global from "./global";
export default class TextCommon extends Component {
  renderBackText() {
    return <Text style={{ color: global.black, fontSize: global.fontSize_14 }}>{this.props.text}</Text>;
  }

  render() {
    return <View>{this.renderBackText()}</View>;
  }
}
