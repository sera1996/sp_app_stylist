import React, { Component } from "react";
import { 
    StyleSheet,
    TouchableOpacity
} from "react-native";
import Calcomp from './component/Calcomp';
import Callabel from './component/Callabel';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


class Calendars extends Component {
    navigateToConfirm(){
        this.props.navigation.navigate('Confirm');
    }
   backToProfile(){
        this.props.navigation.navigate('Profile');
    }
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#fd7166'}}>
                    <Left>
                    <TouchableOpacity onPress={()=>this.backToProfile()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    </Left>
                </Header>
                <TouchableOpacity onPress={()=>this.navigateToConfirm()}>
                    <Text>Confirmation</Text>
                </TouchableOpacity>
                {/*<Calendar/>*/}
                <View>
                    <View style={{flexDirection:'row'}}>
                    <View style={{marginLeft:80}}><Text></Text></View>
                    <View style={{paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,borderWidth:0.5,borderColor:'black'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{height:20,width:20,backgroundColor:'red',borderRadius:10,borderWidth:0.5,backgroundColor:'#01DF74'}}></View>
                            <Text>O - オープン</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{height:20,width:20,backgroundColor:'red',borderRadius:10,borderWidth:0.5,backgroundColor:'#F7D358'}}></View>
                            <Text>C - 美容師さんに要確認</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{height:20,width:20,backgroundColor:'red',borderRadius:10,borderWidth:0.5,backgroundColor:'#fd7166'}}></View>
                            <Text>R/B -　予約有り</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{height:20,width:20,backgroundColor:'red',borderRadius:10,borderWidth:0.5,backgroundColor:'#fd7166'}}></View>
                            <Text>Blocked</Text>
                        </View>
                    </View>
                    <View><Text></Text></View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:24,marginTop:20,marginLeft:20}}>9月</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Callabel day="3"/>
                        <Calcomp label1="9~12" label2="12~15" label3="15~18" label4="18~21"/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Callabel day="4"/>
                        <Calcomp label1="9~12" label2="12~15" label3="15~18" label4="18~21"/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Callabel day="5"/>
                        <Calcomp label1="9~12" label2="12~15" label3="15~18" label4="18~21"/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Callabel day="6"/>
                        <Calcomp label1="9~12" label2="12~15" label3="15~18" label4="18~21"/>
                    </View>
                </View>
        </Container>
        );
    }
}
export default Calendars;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calContent:{
        marginLeft:20,
        height:50,
        width:50,
        backgroundColor:'#fd7166',
        borderRadius:25,
        borderWidth:0.5
    },
    calLabel:{
        marginLeft:20,
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:0.5
    }
});