/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Header from "./Header";
import ImageLoad from "./Common/ImageLoad";
import moment from "moment";

const { width } = Dimensions.get("window");

const boxCount = 3;
const boxWidth = width / boxCount;

export default class UserDetails extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.getParam("username"),
      dob: this.props.navigation.getParam("dob"),
      image: this.props.navigation.getParam("image")
    };
  }

  componentWillMount() {
    // this.willFocusSubscription = this.props.navigation.addListener("willFocus", () => {
    // });
  }
  componentWillUnmount() {
    // this.willFocusSubscription.remove();
  }
  OnBackPage() {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header onLeftPressed={() => this.OnBackPage()} leftImage={require("../img/back-arrow.png")} headertext="UserDetails" />
        <View style={styles.Secondcontainer}>
          <View style={{ flex: 3, flexDirection: "row", padding: 10 }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.viewDivideStyle} onPress={this.props.clickItem}>
              <ImageLoad style={{ height: 50, width: 50, borderRadius: 220 / 2 }} borderRadius={220 / 2} source={{ uri: this.state.image }} />

              <View
                style={{
                  flexWrap: "wrap",
                  paddingRight: 80,
                  flexDirection: "column",
                  marginLeft: 8
                }}
              >
                <Text allowFontScaling={false} style={styles.nametextStyle}>
                  {this.state.username}
                </Text>
                <View style={styles.DateofbirthViewStyle}>
                  <Text allowFontScaling={false} style={styles.doblabletextStyle}>
                    Date of birth:
                  </Text>
                  <Text allowFontScaling={false} style={styles.dobtextStyle}>
                    {moment(this.state.dob).format("YYYY-MM-DD")}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Secondcontainer: {
    backgroundColor: "#ffffff",
    width: "97%",
    height: 70,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    borderColor: "#dddee4"
  },
  viewDivideStyle: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    width: boxWidth
  },
  nametextStyle: { color: "black", fontSize: 14 },
  dobtextStyle: { color: "black", fontSize: 12, marginLeft: 3 },
  doblabletextStyle: { color: "black", fontSize: 12 },
  DateofbirthViewStyle: {
    flexWrap: "wrap",
    paddingRight: 80,
    flexDirection: "row",
    alignItems: "center"
  }
});
