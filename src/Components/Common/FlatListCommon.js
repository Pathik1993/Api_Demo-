import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

export default class FlatListCommon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        style={this.props.style}
        data={this.props.data}
        onEndReached={this.props.onEndReached}
        onEndReachedThreshold={this.props.onEndReachedThreshold}
        ListFooterComponent={this.props.ListFooterComponent}
        renderItem={this.props.renderItem}
      />
    );
  }
}
