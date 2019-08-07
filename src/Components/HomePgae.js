import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  BackButton from './Common/BackButton';
import  DrawerButton from './Common/DrawerButton';
import global from './Common/global';
import FlatListCommon from "../Components/Common/FlatListCommon";
import ItemUserList from "./Item/ItemUserList";
import moment from "moment";
import { connect } from "react-redux";
import { getUserlist } from "../Actions";


 class HomePgae extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: <Text style={styles.HederText}>Home Page</Text>,
          headerLeft: <DrawerButton text={""} onPress={() => navigation.goBack()} />,
        //   headerRight: <BackButton text={""} onPress={navigation.getParam('infoPressed')} />,
        };
      };

  constructor(props) {
    super(props);
    this.state = {
        pageCount: 1
    };
  }
  componentWillMount() {
      this.setState({ pageCount: 1 });
      this.props.getUserlist({ page: this.state.pageCount });
  }

  componentDidMount() {
    this.props.navigation.setParams({ infoPressed: this.infoPressed.bind(this) });
  }
  infoPressed() {
    console.log("Hello");
    
  }

  render() {
    return (
        <FlatListCommon
            style={{ marginBottom: 50 }}
            data={this.props.results}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <ItemUserList
                  userImage={{ uri: item.picture.large }}
                  name={item.login.username}
                  Dateofbirth={moment(item.dob.date).format("YYYY-MM-DD")}
                  key={index.toString()}
                />
              );
            }}
          />
      
    );
  }
}

const styles = StyleSheet.create({
    HederText: {
       color:global.white,
       fontSize: global.fontSize_20
    }
})

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
  )(HomePgae);