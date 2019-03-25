/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer,
createBottomTabNavigator} from 'react-navigation';
import { Container, Header, View, DeckSwiper, Card, 
    CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Home from './screens/Home/Home';
import Favorite from './screens/Favorite/Favorite';
import History from './screens/History/History';
import MyPage from './screens/MyPage/MyPage';
import Gnar from './screens/Gnar'
import Taric from './screens/Taric'
import HomeIndex from './screens/Home/HomeIndex';
import Profile from './screens/Home/Profile';
import Calendars from './screens/Home/Calendars'
import ProfileContainer from './screens/Home/ProfileContainer';
/*
export default class App extends Component{
  render() {
    return ( 
    <AppContainer/>
    );
  }
}
*/

const Tab = createBottomTabNavigator({
  ProfileConatiner:{
    screen:ProfileContainer,
    navigationOptions:{
       tabBarIcon:({tintColor})=>(
        <Icon name="ios-home" style={{fontSize:24,color:'white'}} />
       )
     }
  },
  Calendars:{
    screen:Calendars,
    navigationOptions:{
       tabBarIcon:({tintColor})=>(
        <Icon name="ios-home" style={{fontSize:24,color:'white'}} />
       )
     }
  },
  MyPage:{
    screen:MyPage,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <Icon name='ios-contact' style={{fontSize:24,color:'white'}}/>
      )
    }
  }
},{
   tabBarOptions:{
    activeTintColor:
      'black',
    inactiveTintColor:
    'white',
     style:{
       backgroundColor:'#fd7166',
     },
      showLabel:false
   }
 });
const App = createAppContainer(Tab);
export default App;
/*
class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
class Apple extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Gnar:Gnar,
  Taric:Taric
},{initialRouteName:'Gnar'})
const AppContainer = createAppContainer(AppStackNavigator);
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
