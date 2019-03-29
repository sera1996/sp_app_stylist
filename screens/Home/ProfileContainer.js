import React, { Component } from "react";
import { Rating, AirbnbRating } from 'react-native-elements';

import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import { Container, Header, View, DeckSwiper, 
    Card, CardItem, Thumbnail, Text, 
    Left, Body, Icon } from 'native-base';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import {createStackNavigator,
        createAppContainer} from 'react-navigation';
import {readEvents} from '../../actions';
import reducer from '../../reducers';
import Profile from './Profile';
import Calendars from './Calendars';
import Confirm from './Confirm';
import Monsi from './Monsi';
export const store = createStore(reducer,applyMiddleware(thunk))

const RootStack = createStackNavigator({
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
    initialRouteName:'Profile'
})

let Navigation = createAppContainer(RootStack);
class ProfileContainer extends Component {
    render() {
        return (
            <Container>
                <Provider store={store}>
                    <Navigation/>
                </Provider>
            </Container>
        );
    }
}

export default ProfileContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});