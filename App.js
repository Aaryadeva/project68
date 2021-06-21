import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './Screens/FacebookScreen'
import InstagramScreen from './Screens/InstagramScreen'


export default class App extends Component {
  render(){
  return (
    
      <AppContainer/>
    
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
})

const AppContainer=createAppContainer(TabNavigator)