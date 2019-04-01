import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import Reservecomp from './component/Reservecomp';
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];
class Schedule extends Component {
    render() {
        return (
            
            <View>
                <View style={{backgroundColor:'#fd7166',height:85}}></View>
                <ScrollView>
                <View style={{backgroundColor:'white',height:800}}>
                    <View style={{flexDirection:'row'}}>
                <Text style={styles.rireki}>予約確認</Text>
                <TouchableOpacity>
                <Text style={{textDecorationLine:'underline',marginTop:20,marginRight:20}}>今日:</Text>
                </TouchableOpacity>
                </View>
                <Reservecomp time='12:00'name='上原　光陽' menu='パンチパーマ' price='3000'/>
                <Reservecomp time='13:00 'name='河野　雪' menu='カラー' price='3000'/>
                <Reservecomp time='14:00' name='高橋　バルヴォッサ' menu='ちょんまげ' price='3000'/>
                <Reservecomp time= '15:00'name='Roman Nasuti' menu='カット' price='3000'/>
 
                {/*
                <TouchableOpacity onPress={()=>this.navigateToProfile(Pics[0])}>
                <Text>Favorite</Text>
                </TouchableOpacity>
                */}
                
                </View>
                </ScrollView>
            </View>
            
        );
    }
}
export default Schedule;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    rireki:{
        fontSize:30,
        color:'#FD7166',
        marginTop:20,
        marginLeft:20,
        flex:1
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
        flexDirection:'row'
    }
});