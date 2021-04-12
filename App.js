import React, {Component} from 'react';
import { Image } from 'react-native';
import { Switch } from 'react-native';
import {Text, View} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import contentComponent from './contentComponent';
import AddItem from './Screens/AddItem';
import Home from './Screens/Home';
import Login from './Screens/Login';
import MyBarters from './Screens/MyBarters';
import Notifications from './Screens/Notifications';
import recievedItems from './Screens/recievedItems';
import Settings from './Screens/Settings';
import Signup from './Screens/Signup';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const UserAuth = createBottomTabNavigator({
  Login : {
    screen : Login,
    navigationOptions : {
      tabBarLabel : 'Login Screen',
      tabBarIcon : <Image source = {require('./Screens/Images/loginIcon.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
  Signup : {
    screen : Signup,
    navigationOptions : {
      tabBarLabel : 'Signup Screen',
      tabBarIcon : <Image source = {require('./Screens/Images/SignupIcon.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  }
})

const DrawerNavigator = createDrawerNavigator({
  Home : {
    screen : Home,
    navigationOptions : {
      drawerLabel : 'Home screen'
    }
  },
  AddItem : {screen : AddItem,
    navigationOptions : {
      drawerLabel : 'Add Items'
    }},
  recievedItems : {screen : recievedItems,
    navigationOptions : {
      drawerLabel : 'My recieved items'
    }},
  Notifications : {screen : Notifications,
    navigationOptions : {
      drawerLabel : 'Notifications'
    }},
  Settings : {screen : Settings,
    navigationOptions : {
      drawerLabel : 'Settings'
    }}
},
{
  contentComponent : contentComponent
},
{
  initialRouteName : 'Home'
})

const SwitchNavigator = createSwitchNavigator({
  UserAuth,
  DrawerNavigator,
  MyBarters,
})

const AppContainer = createAppContainer(SwitchNavigator);

