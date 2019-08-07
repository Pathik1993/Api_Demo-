import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";
import TextinputCommon from "./Common/TextinputCommon";
import TextCommon from "./Common/TextCommon";
import { StackActions, NavigationActions } from "react-navigation";
import { emailChangeLogin, emailErrorChangeLogin, passwordChangeLogin, passwordErrorChangeLogin } from "../Actions";

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {};
  }
  focusNextField(nextField) {
    this.refs[nextField].focus();
  }

  onEmailChange(text) {
    this.props.emailChangeLogin(text);
  }
  onPasswordChange(text) {
    this.props.passwordChangeLogin(text);
  }

  onButtonPress() {
    const { username, password } = this.props;
    let isValid = true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username === "") {
      isValid = false;
      this.props.emailErrorChangeLogin("Enter email");
    } else if (reg.test(username) === false) {
      isValid = false;
      this.props.emailErrorChangeLogin("Enter valid email");
    } else {
      this.props.emailErrorChangeLogin("");
    }
    if (password === "") {
      isValid = false;
      this.props.passwordErrorChangeLogin("Enter password");
    } else {
      this.props.passwordErrorChangeLogin("");
    }
    if (isValid === true) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "UserList"
          })
        ]
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextinputCommon
          returnKeyType="next"
          ref="1"
          value={this.props.username}
          onChangeText={this.onEmailChange.bind(this)}
          placeholder={"Username"}
          onSubmitEditing={() => this.focusNextField("2")}
        />
        <TextCommon allowFontScaling={false} text={this.props.usernameError} />
        <TextinputCommon
          ref="2"
          value={this.props.password}
          returnKeyType="done"
          onChangeText={this.onPasswordChange.bind(this)}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        <TextCommon allowFontScaling={false} text={this.props.passwordError} />

        <Button title={"Login"} style={styles.input} onPress={this.onButtonPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});
const mapStateToProps = state => {
  return {
    username: state.Login.email,
    usernameError: state.Login.emailError,
    password: state.Login.password,
    passwordError: state.Login.passwordError,
    isLoading: state.Login.isLoading
  };
};
export default connect(
  mapStateToProps,
  {
    emailChangeLogin,
    emailErrorChangeLogin,
    passwordChangeLogin,
    passwordErrorChangeLogin
  }
)(Login);
