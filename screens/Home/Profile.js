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
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            menuNum:2,
            items:[]
        }
    }
    fetchRepositories(){
        fetch('http://127.0.0.1:8000/api.stylist.v1/home/')
        .then(response => response.json())
        .then(response=> console.log(response[0].menus));
    }
    navigateToReview(){
        this.props.navigation.navigate('Review');
    }
    navigateToCalendar(){
        this.props.navigation.navigate('Calendars');
    }
    checkLine(num){
        this.setState({menuNum:num});
        console.log(this.state.menuNum);
        this.menuContent(num);
    }
    backToHome(){
        this.props.navigation.navigate('Home');
    }
    menuContent(num){
        if(num==2){
            return(
                <View>
                    <TouchableOpacity style = {{borderBottomWidth:0.3,marginLeft:50,marginRight:50}}>
                        <View style={{marginTop:10,height:30}}>
                        <Text style={{textAlign:'center'}}>前髪ヘアーカット ¥2000 ></Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginTop:10,height:30,borderBottomWidth:0.3,marginLeft:50,marginRight:50}}>
                        <Text style={{textAlign:'center'}}>ハイトーンカラー ¥3000 ></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:10,borderBottomWidth:0.3,marginLeft:50,marginRight:50,height:30}}>
                        <Text style={{textAlign:'center'}}>ダメージケア  ¥5000 ></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginTop:10,height:30,borderBottomWidth:0.3,marginLeft:50,marginRight:50}}>
                        <Text style={{textAlign:'center'}}>ダメージケア  ¥5000 ></Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if(num==1){
            return(
                <View>
                <Text style={{textAlign:'center'}}>神奈川県藤沢市遠藤3607-8ベルツリーsfc207</Text>
                </View>
            );
        }
        else if(num==3){
            return(
                <View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginLeft:50,marginTop:10}}>
                        <Text style={{fontSize:28,textAlign:'center'}}>3.57</Text>
                        <Text style={{fontSize:12,textAlign:'center'}}>103 レビュー</Text>
                    </View>
                    <View>
                        <Rating
                            imageSize={28}
                            readonly
                            startingValue={3}
                            style={{marginLeft:80,marginTop:15}}
                            />
                        <TouchableOpacity>
                            <Text style={{textDecorationLine:'underline',marginLeft:160}}>並び替え:</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.profileStyle}>

                    <Text style={{marginTop:5,marginLeft:5}}>星野　リサ</Text>
                    <Text style={{marginTop:5,marginLeft:5,fontSize:11}}>
                        初めて行ったサロンでしたがカラーの仕上がりが
                        とても良く、カットも希望通りにしていただけたので
                        とても満足しました。
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>

                    <Text style={{marginTop:5,marginLeft:5}}>星野　リサ</Text>
                    <Text style={{marginTop:5,marginLeft:5,fontSize:11}}>
                        初めて行ったサロンでしたがカラーの仕上がりが
                        とても良く、カットも希望通りにしていただけたので
                        とても満足しました。
                    </Text>
                </TouchableOpacity>
                </View>
            );
        }
        else{
            <View>
                <Text>no num selected</Text>
            </View>
        }
    }
    render() {
    //const{navigation:{state:{params:{press}}}}=this.props;

        return (
            <Container>
                <Header style={{backgroundColor:'#fd7166'}}>
                    <Left>
                    <TouchableOpacity onPress={()=>this.backToHome()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    </Left>
                </Header>
            <ScrollView>
            <View>
                <View style={{flexDirection:'row',height:150}}>
                    {/*
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.backToHome()}>
                        <Text style={{marginTop:50,marginLeft:20,fontSize:20,textDecorationLine:'underline'}}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Text style={{marginTop:30,alignContent:'center',fontSize:22,textAlign:'center'}}>
                        
                        </Text>
                        <Text style={{textAlign:'center',fontSize:12,textDecorationLine:'underline'}}></Text>
                        </TouchableOpacity >
                    </View>
                    */}
                    <View style={{shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,  }}>
                    <Image
                    style={{marginLeft:120,width:125,height:125,borderRadius:125/2}}
                    source = {Pics[0].uri}/>
                    </View>
                    <TouchableOpacity style={{flex:1}}>
                        <Text style={{marginTop:110,fontSize:22,textAlign:'center'}}>
                        
                        </Text>
                        <Text style={{fontSize:12,textAlign:'center',textDecorationLine:'underline'}}></Text>
                    </TouchableOpacity>
                </View>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1,textAlign:'center'}}>____</Text>
                    <Text style={{flex:1,textAlign:'center',fontSize:14}}>@teraokayum</Text>
                    <Text style={{flex:1,textAlign:'center'}}>____</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text note style={{flex:1,textAlign:'center'}}>神奈川県横浜市</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text note style={{flex:1,textAlign:'center'}}>キャリア:4年</Text>
                </View>
                <Text style={{marginTop:20,marginLeft:30,marginRight:30}}>お客様のライフスタイルに合わせた１番に会うを提案します。
                    希望の髪型、髪の毛のケア、セットの仕方、やりたいように出来ないなど何でも言ってください。
                </Text>
            </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                <TouchableOpacity style={styles.buttonStyle1}
                onPress={()=>this.navigateToCalendar()}>
                    <Text 
                    style={styles.textStyle}>
                        ビデオコール
                    </Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity style={styles.buttonStyle1}
                onPress={()=>this.fetchRepositories()}>
                    <Text 
                    style={styles.textStyle}>
                        fetch
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <TouchableOpacity style={{flex:1}} onPress={()=>this.checkLine(1)}>
                        <Text style={{textAlign:'center',fontSize:16}}>店舗情報</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={()=>this.checkLine(2)}>
                        <Text style={{textAlign:'center',fontSize:16}}>メニュー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={()=>this.checkLine(3)}>
                        <Text style={{textAlign:'center',fontSize:16}}>レビュー</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:30,backgroundColor:'#fd7166',shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3}}>
                <Text style={{textAlign:'center',color:'white'}}>_________</Text>
                </View>

                <View style={{height:400,backgroundColor:'#f2f2f2'}}>
                    {this.menuContent(this.state.menuNum)}
                </View>
            </View>
            </ScrollView>
            </Container>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle1:{
        flex:1,
        marginLeft:120,
        marginRight:120,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#FD7166',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35 
    },
    buttonStyle2:{
        flex:1,
        marginTop:10,
        marginRight:40,
        marginBottom:10,
        backgroundColor:'#FD7166',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35 
    },
    buttonStyle3:{
        marginTop:10,
        marginRight:100,
        marginLeft:100,
        marginBottom:10,
        backgroundColor:'#FD7166',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:35 
    },
    textStyle:{
        marginTop:5,
        paddingLeft:15,
        color:'#fff',
        fontSize:14
    },
    menuText:{
        fontSize:18,
        textDecorationLine:'underline',
        marginBottom:20,
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        backgroundColor:'#fbfafa',
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3
    },
    profileStyle:{
        marginTop:30,
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:90,
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3,
    }
});