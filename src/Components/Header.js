import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>

                <TouchableOpacity
                 onPress={this.props.onLeftPressed}
                 activeOpacity={0.8}
                 style={{ height:50, width: 50, justifyContent: 'center',
                 paddingLeft: 10}}
                >
                    <Image
                    style={styles.backArrowStyle}
                    source={this.props.leftImage}
                    />
                </TouchableOpacity>

            <View style={{ flex: 0.8 , justifyContent: 'center', alignItems: 'center' }}>
                <Text allowFontScaling={false} style={styles.textStyle}> {this.props.headertext} </Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
  backArrowStyle: {
    height: 18,
    width: 18,
    tintColor: 'black'
  }
});
