import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {} from "react-native";
import Reducers from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import RootStack from "../src/routes";

export default class App extends Component {
  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
