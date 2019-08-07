import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import ImageLoad from "../Common/ImageLoad";
import TextCommon from "../Common/TextCommon";
const { width } = Dimensions.get("window");
const boxCount = 3;
const boxWidth = width / boxCount;

export default class ItemUserList extends Component {
  render() {
    const { container, viewDivideStyle, nametextStyle, dobtextStyle } = styles;
    return (
      <View style={container}>
        <View style={{ flex: 3, flexDirection: "row", padding: 10 }}>
          <TouchableOpacity activeOpacity={0.8} style={styles.viewDivideStyle} onPress={this.props.clickItem}>
            <ImageLoad style={{ height: 50, width: 50, borderRadius: 220 / 2 }} borderRadius={220 / 2} source={this.props.userImage} />

            <View
              style={{
                flexWrap: "wrap",
                paddingRight: 80,
                flexDirection: "column",
                marginLeft: 8
              }}
            >
              <TextCommon allowFontScaling={false} text={this.props.name} />

              <View style={styles.DateofbirthViewStyle}>
                <TextCommon allowFontScaling={false} text={"Date of birth:"} />
                <TextCommon allowFontScaling={false} text={this.props.Dateofbirth} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#ffffff",
    width: "97%",
    height: 70,
    flex: 3,
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
};
