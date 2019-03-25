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
import {readEvents} from '../../actions';
import reducer from '../../reducers';
import Profile from './Profile';
export const store = createStore(reducer,applyMiddleware(thunk))

class ProfileContainer extends Component {
    render() {
        return (
            <Container>
                <Provider store={store}>
                    <Profile/>
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