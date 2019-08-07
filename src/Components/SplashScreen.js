/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, NetInfo } from "react-native";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (Platform.OS === "android") {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) {
          // Alert.alert("You are online!");
          this.onRedirctPage("HomePgae", 500);
        } else {
          Alert.alert("You are offline!");
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener("connectionChange", this.handleFirstConnectivityChange);
    }
  }
  handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener("connectionChange", this.handleFirstConnectivityChange);

    if (isConnected === false) {
      Alert.alert("You are offline!");
    } else {
      // Alert.alert("You are online!");
      // console.warn("Hello onilne");
      this.onRedirctPage("HomePgae", 500);
    }
  };
  onRedirctPage(string, number) {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: string
          })
        ]
      });
      this.props.navigation.dispatch(resetAction);
    }, number);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Demo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 38,
    color: "black"
  }
});
