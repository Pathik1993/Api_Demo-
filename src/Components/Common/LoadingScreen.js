import React, { Component } from "react";
import { Text, View, ActivityIndicator, Modal, StyleSheet, Dimensions } from "react-native";
import global from "./global";

const viewPort = Dimensions.get("window");

export class LoadingScreen extends Component {
  render() {
    const { loading = false, param = "loading..." } = this.props;
    return (
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <Modal visible={loading} animated={true} onRequestClose={() => {}} transparent={true} animationType="fade">
          <View
            style={{
              height: viewPort.height,
              width: viewPort.width,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,.3)"
            }}
          >
            <ActivityIndicator size="large" animating={true} color={global.primary} />
            {/* <Text>{param}</Text> */}
            {/* <PulseLoader color={colors.primary} size={norimlizeText(50)} /> */}
          </View>
        </Modal>
      </View>
    );
  }
}

MapStateToProps = ({ register }) => {
  return { ...register };
};
export default LoadingScreen;
