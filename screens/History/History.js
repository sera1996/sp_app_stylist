import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
const Pics =[
  {id:'1',uri: require('../../assets/biyoushi3.jpg')},
  {id:'2',uri: require('../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../assets/biyoushi1.jpg')},
];
class History extends Component {
    render() {
        return (
            <View>
                <View style={{backgroundColor:'#fd7166',height:85}}></View>
                <View style={{backgroundColor:'white',height:800}}>
                    <View style={{flexDirection:'row'}}>
                <Text style={styles.rireki}>施術履歴</Text>
                <TouchableOpacity>
                <Text style={{textDecorationLine:'underline',marginTop:20,marginRight:20}}>並び替え:</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profileStyle}>
                    <Image
                        style={{margintTop:5,marginBottom:5,marginLeft:5,width:80,height:80,borderRadius:40}}
                        source = {Pics[0].uri}/>
                    <View>
                    <Text style={{marginLeft:20,marginTop:10}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:8}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <Image
                        style={{margintTop:5,marginBottom:5,marginLeft:5,width:80,height:80,borderRadius:40}}
                        source = {Pics[1].uri}/>
                    <View>
                    <Text style={{marginLeft:20,marginTop:10}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:8}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <Image
                        style={{margintTop:5,marginBottom:5,marginLeft:5,width:80,height:80,borderRadius:40}}
                        source = {Pics[2].uri}/>
                    <View>
                    <Text style={{marginLeft:20,marginTop:10}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:8}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileStyle}>
                    <Image
                        style={{margintTop:5,marginBottom:5,marginLeft:5,width:80,height:80,borderRadius:40}}
                        source = {Pics[0].uri}/>
                    <View>
                    <Text style={{marginLeft:20,marginTop:10}}>望月　優</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:8}}>スタイリスト</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12,color:'#fd7166'}}>¥5000</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontSize:12}}>神奈川県横浜市</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>this.navigateToProfile(Pics[0])}>
                <Text>Favorite</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default History;


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