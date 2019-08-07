import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View,StyleSheet } from "react-native";

export default class DrawerButton extends Component {
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
          <Image style={styles.menuStyle} source={require('../../img/menu_icon.png')} />
          {this.renderBackText()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menuStyle:{
    width: 24,
    height: 16,
    marginLeft: 10
  }
})