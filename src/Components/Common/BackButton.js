import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default class BackButton extends Component {
  renderBackText() {
    return (
      <Text style={{ color: "white", paddingLeft: 5, paddingTop: 2 }}>
        {this.props.text}
      </Text>
    );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.backStyle} source={require('../../img/back-arrow.png')} />
          {this.renderBackText()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  }

})