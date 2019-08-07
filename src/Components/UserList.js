/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Header from "./Header";
import ItemUserList from "./Item/ItemUserList";
import { connect } from "react-redux";
import { getUserlist } from "../Actions";
import FlatListCommon from "../Components/Common/FlatListCommon";
import moment from "moment";

class UserList extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 1,
      visible: false
    };
  }
  componentWillMount() {
    this.willFocusSubscription = this.props.navigation.addListener("willFocus", () => {
      this.setState({ pageCount: 1 });
      this.props.getUserlist({ page: this.state.pageCount });
    });
  }
  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  handleLoadMore = () => {
    this.setState(
      {
        pageCount: this.state.pageCount + 1
      },
      () => {
        console.log(this.state.pageCount);

        if (this.props.isdata) {
          this.props.getUserlist({
            page: this.state.pageCount + 1,
            results: this.props.results
          });
        }
      }
    );
  };
  ActivityIndicator = () => {
    return <ActivityIndicator color="#000000" size="small" />;
    // return (
    //   <View style={{ marginLeft: 10, marginTop: 10 }}>
    //     <ContentLoader height={300} duration={1000}>
    //       <Circle cx="30" cy="30" r="30" />
    //       <Rect x="70" y="13" rx="4" ry="4" width="100" height="13" />
    //       <Rect x="70" y="37" rx="4" ry="4" width="50" height="8" />
    //     </ContentLoader>
    //   </View>
    // );
  };

  Redirectpage(item) {
    this.props.navigation.navigate("UserDetails", {
      image: item.picture.large,
      username: item.login.username,
      dob: item.dob.date
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headertext="UserList" />
        <View>
          <FlatListCommon
            style={{ marginBottom: 50 }}
            data={this.props.results}
            onEndReached={this.handleLoadMore.bind(this)}
            onEndReachedThreshold={1}
            ListFooterComponent={this.ActivityIndicator.bind(this)}
            renderItem={({ item, index }) => {
              return (
                <ItemUserList
                  userImage={{ uri: item.picture.large }}
                  name={item.login.username}
                  Dateofbirth={moment(item.dob.date).format("YYYY-MM-DD")}
                  clickItem={() => this.Redirectpage(item)}
                />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nametextStyle: { color: "black", fontSize: 14 },
  lottie: {
    width: 100,
    height: 100
  }
});

const mapStateToProps = state => {
  return {
    results: state.UserList.results,
    login: state.UserList.login,
    picture: state.UserList.picture,
    dob: state.UserList.dob,
    authResult: state.UserList.authResult,
    isLoading: state.UserList.isLoading,
    isdata: state.UserList.isdata
  };
};

export default connect(
  mapStateToProps,
  {
    getUserlist
  }
)(UserList);
