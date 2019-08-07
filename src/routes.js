import React from "react";
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";
import SplashScreen from "./Components/SplashScreen";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";
import Login from "./Components/Login";
import HomePgae from "./Components/HomePgae";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: "#4CAF50",
    borderBottomColor: "white",
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontSize: 12
  }
};

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    UserList: { screen: UserList },
    UserDetails: { screen: UserDetails },
    Login: { screen: Login },
    HomePgae: { screen: HomePgae },
  },
  {
    initialRouteName: "SplashScreen",
    defaultNavigationOptions: defaultNavigationOptions
  }
);

export const AppDrawerStack = createDrawerNavigator(
  { AppNavigator: AppNavigator },
  {
    drawerWidth: 300,
    drawerLockMode: 'locked-closed',
    // contentComponent: props => <CustomSideMenu {...props} />
  });

export default createAppContainer(AppDrawerStack);
