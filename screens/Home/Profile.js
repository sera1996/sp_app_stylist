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
    Left, Body, Icon,Drawer,Button,Title,Right,InputGroup, Input } from 'native-base';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import {readEvents} from '../../actions';
import reducer from '../../reducers';
import axios from 'axios'
import SideBar from './SideBar';

const store = createStore(reducer,applyMiddleware(thunk))

const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            menuNum:4,
            items:[]
        }
    }
    closeDrawer = () => {
        this._drawer._root.close();
    }
    openDrawer = () => {
        //alert('open');
        this._drawer._root.open();
    }
    fetch(){
        console.log(this.props.events);
    }
    componentDidMount(){
        this.props.readEvents()
    }
    fetchRepositories(){
        fetch('http://127.0.0.1:8000/api.stylist.v1/home/')
        .then(response => response.json())
        .then(response=> console.log(response[0]));
    }
    navigateToReview(){
        this.props.navigation.navigate('Review');
    }
    navigateToCalendar(){
        this.props.navigation.navigate('Calendars');
    }
    checkLine(num){
        this.setState({menuNum:num});
        //console.log(this.state.menuNum);
        this.menuContent(num);
    }
    backToHome(){
        this.props.navigation.navigate('Home');
    }
    menuContent(num){
        if(num==1){
            return(
                <View>
                <Text note style={{marginTop:30,marginLeft:30}}>最寄駅</Text>
                <InputGroup borderType= 'underline'style={{marginTop:15,backgroundColor:'#fff',width:300,height:25,marginLeft:20}}>
                        <Icon name="subway" style={{color:'#fd7166'}}/>
                        <Input placeholder="アドレスを入力してください"/>
                </InputGroup>
                <Text note style={{marginTop:50,marginLeft:30}}>店舗ロケーション</Text>
                <InputGroup borderType= 'underline'style={{marginTop:15,backgroundColor:'#fff',width:300,height:25,marginLeft:20}}>
                        <Icon name="send" style={{color:'#fd7166'}}/>
                        <Input  placeholder="アドレスを入力してください"/>
                </InputGroup>
                <Text note style={{marginTop:30,marginLeft:30}}>店舗外観写真</Text>
                <View style={{marginTop:10,marginLeft:30,width:80,height:80,backgroundColor:'#e6e6e6'}}>
                    <TouchableOpacity style={{width:30,height:30,borderRadius:15,backgroundColor:'#848484',marginTop:25,marginLeft:25}}>
                        <Text style={{textAlign:'center',color:'white',marginTop:3}}>+</Text>
                    </TouchableOpacity>
                </View>
                </View>
            );
        }
        else if(num==2){
            return(
                <View>
                    <View style = {{borderBottomWidth:0.3,marginLeft:50,marginRight:50}}>
                        <View style={{flexDirection:'row',marginTop:30,height:30}}>
                            <Text style={{flex:1,textAlign:'center'}}>前髪ヘアーカット</Text>
                            <Text style={{flex:1,textAlign:'center'}}>¥3000</Text>
                            <TouchableOpacity>
                                <Text style={{fontWeight:'bold',color:'#fd7166',fontSize:34}}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{borderBottomWidth:0.3,marginLeft:50,marginRight:50}}>
                        <View style={{flexDirection:'row',marginTop:30,height:30}}>
                            <Text style={{flex:1,textAlign:'center'}}>ハイトーンカラー</Text>
                            <Text style={{flex:1,textAlign:'center'}}>¥2000</Text>
                            <TouchableOpacity>
                                <Text style={{fontWeight:'bold',color:'#fd7166',fontSize:34}}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View style={styles.addMenu}>
                        <Text style={{paddingLeft:20,paddingTop:10}}>
                            新規メニュー:
                        </Text>
                        <Text style={{paddingTop:10,paddingLeft:20}}>_______________</Text>
                        <Text style={{paddingLeft:20,paddingTop:20}}>価格：</Text>
                        <Text style={{paddingTop:10,paddingLeft:20}}>____________</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                                <Text style={{fontWeight:'bold',color:'#fd7166',fontSize:34,paddingTop:40,paddingLeft:30}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <Text note style={{paddingLeft:260,paddingTop:20}}>最大メニュー数3</Text>
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
                <TouchableOpacity style={styles.reviewStyle}>

                    <Text style={{marginTop:5,marginLeft:5}}>星野　リサ</Text>
                    <Text style={{marginTop:5,marginLeft:5,fontSize:11}}>
                        初めて行ったサロンでしたがカラーの仕上がりが
                        とても良く、カットも希望通りにしていただけたので
                        とても満足しました。
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewStyle}>

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
        else if(num==4){
            return(
                <View>
                    <Text note style={{marginLeft:20,marginTop:20,fontSize:16}}>プロフィールの一言</Text>
                        <View style={{flexDirection:'row',marginLeft:20}}>
                        <Text style={{flex:3,paddingLeft:20,marginTop:15}}>
                        お客様のライフスタイルに合わせた１番に会うを提案します。
                        希望の髪型、髪の毛のケア、セットの仕方、やりたいように出来ないなど何でも言ってください。
                        </Text>
                        <TouchableOpacity style={{flex:1,paddingLeft:10,marginTop:10}}>
                        <Text style={{textAlign:'center',fontWeight:'bold',color:'#fd7166'}}>
                            編集
                        </Text>
                        </TouchableOpacity>
                        </View>
                    <Text note style={{marginLeft:20,marginTop:20,fontSize:16}}>お悩み解決スキル</Text>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.profileStyle}>
                            <Text style={{textAlign:'center',paddingLeft:10,paddingRight:10}}>
                                パサつき
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Text style={{color:'#fd7166',fontWeight:'bold'}}>編集</Text>
                            </TouchableOpacity>
                            </View>
                            <View>
                    <Text note style={{textAlign:'center'}}>_____________________________________________________</Text>
                </View>
                </View>
            );
        }
        else if(num == 5){
            return(
                <View style={{marginTop:30}}>
                    <View style={{flexDirection:'row'}}>
                        <Text note style={{flex:1,textAlign:'center'}}>施術名</Text>
                        <Text note style={{flex:1,textAlign:'center'}}>ビフォー</Text>
                        <Text note style={{flex:1,textAlign:'center'}}>アフター</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,marginLeft:25,marginRight:25}}>
                        <Text style={{textAlign:'right',marginTop:10,color:'#fd7166',fontWeight:'bold'}}>編集</Text>
                            <Text style={{textAlign:'center',backgroundColor:'#fd7166',color:'white',marginTop:10,paddingTop:5,
                            paddingBottom:5,fontSize:12}}>ハイトーンカラー</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../assets/photo2.jpg')} style={{width:90,height:90,marginTop:10}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../assets/photo3.jpg')} style={{width:90,height:90,marginTop:10}}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,marginLeft:25,marginRight:25}}>
                        <Text style={{textAlign:'right',marginTop:10,color:'#fd7166',fontWeight:'bold'}}>編集</Text>
                            <Text style={{textAlign:'center',backgroundColor:'#fd7166',color:'white',marginTop:10,paddingTop:5,
                            paddingBottom:5,fontSize:12}}>前髪ヘアーカット</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../assets/photo1.jpg')} style={{width:90,height:90,marginTop:10}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../../assets/photo4.jpg')} style={{width:90,height:90,marginTop:10}}/>
                        </View>
                    </View>
                    <Text note style={{textAlign:'right',marginTop:90}}>最大写真枚数:3</Text>
                </View>
            );
        }
        else if(num==6){
            return(
                <View>
                    <View style={{flexDirection:'row',marginTop:30}}>
                        <View style={{flex:1,marginLeft:30}}>
                            <Text note>Username</Text>
                            <Text style={{marginTop:15}}>teraokayum</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{color:'#fd7166',textAlign:'right',marginRight:30}}>編集</Text> 
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30}}>
                        <View style={{flex:1,marginLeft:30}}>
                            <Text note>Email</Text>
                            <Text style={{marginTop:15}}>teraokayum@abenew.com</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{color:'#fd7166',textAlign:'right',marginRight:30}}>編集</Text> 
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:30}}>
                        <View style={{flex:1,marginLeft:30}}>
                            <Text note>スタイリスト歴</Text>
                            <Text style={{marginTop:15}}>5年</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{color:'#fd7166',textAlign:'right',marginRight:30}}>編集</Text> 
                        </View>
                    </View>
                </View>
            )
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
            <Drawer 
                ref={(ref)=>{this._drawer=ref;}}
                        content={<SideBar/>}>
            <Container style={{marginTop:50}}>
            <ScrollView>
            <View>
                <View style={{flexDirection:'row',height:150,marginTop:30}}>
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
                <View>
                    <Text　style={{flex:1,textAlign:'center',fontSize:24,fontWeight:'bold'}}>
                        寺岡悠馬
                    </Text>
                    <Text note style={{marginTop:10,flex:1,textAlign:'center',fontSize:16}}>@teraokayum</Text>
                </View>
            </View>
                <ScrollView horizontal='true'style={{flexDirection:'row',marginTop:50}}>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(4)}>
                        <Text style={{textAlign:'center',fontSize:16}}>詳細</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(2)}>
                        <Text style={{textAlign:'center',fontSize:16}}>メニュー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(1)}>
                        <Text style={{textAlign:'center',fontSize:16}}>店舗情報</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(3)}>
                        <Text style={{textAlign:'center',fontSize:16}}>レビュー</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(5)}>
                        <Text style={{textAlign:'center',fontSize:16}}>B/A写真</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scrollMenu} onPress={()=>this.checkLine(6)}>
                        <Text style={{textAlign:'center',fontSize:16}}>設定</Text>
                    </TouchableOpacity>
                </ScrollView>

                <View>
                    {this.menuContent(this.state.menuNum)}
                </View>
            </View>
            </ScrollView>
            </Container>
            </Drawer>
        );
    }
}
const mapStateToProps = state => ({events:state.events});
const mapDispatchToProps = ({readEvents});
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
//export default Profile;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollMenu:{
        marginLeft:20,
        marginRight:20
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
        marginTop:15,
        marginLeft:40,
        marginRight:200,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        height:25,
        shadowColor:"black",
        shadowOffset:{height:1},
        shadowOpacity:0.3,
        flexDirection:'row'
    },
    addMenu:{
        marginTop:15,
        marginLeft:80,
        paddingRight:70,
        backgroundColor:'#fbfafa',
        borderRadius:35,
        height:140,
        shadowColor:"black",
        shadowOffset:{height:1},
        shadowOpacity:0.3,
    },
    icon:{
        color:'#fff',
        fontSize:40,
    },
    reviewStyle:{
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