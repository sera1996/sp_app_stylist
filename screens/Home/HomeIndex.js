import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


import {createStackNavigator,
        createAppContainer} from 'react-navigation';
import Home from './Home';
import Profile from './Profile';
import Calendars from './Calendars';
import Confirm from './Confirm';
import Monsi from './Monsi';


class Talon extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeIndex</Text>
            </View>
        );
    }
}
class Riven extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HomeIndex</Text>
            </View>
        );
    }
}
const RootStack = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:()=>({
            header:null
        })
    },
    Profile:{
        screen:Profile,
        navigationOptions:()=>({
            header:null
        })
    },
    Calendars:{
        screen:Calendars,
        navigationOptions:()=>({
            header:null
        })
    },
    Confirm:{
        screen:Confirm,
        navigationOptions:()=>({
            header:null
        })
    },
    Monsi:{
        screen:Monsi,
        navigationOptions:()=>({
            header:null
        })
    }
},{
    initialRouteName:'Home'
})

const HomeIndex = createAppContainer(RootStack);
export default HomeIndex;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});