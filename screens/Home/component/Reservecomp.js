import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
const Pics =[
  {id:'1',uri: require('../../../assets/biyoushi1.jpg')},
  {id:'2',uri: require('../../../assets/biyoushi2.jpg')},
  {id:'3',uri: require('../../../assets/biyoushi1.jpg')},
];
class Reservecomp extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.profileStyle}>
                    {/*
                    <Image
                        style={{margintTop:5,marginBottom:5,marginLeft:5,width:80,height:80,borderRadius:40}}
                        source = {Pics[0].uri}/>
                        */}
                    <View>
                    <Text style={{textAlign:'center',marginTop:10}}>{this.props.time}</Text>
                    <Text style={{textAlign:'center',marginTop:5}}>{this.props.name}</Text>
                    <Text style={{textAlign:'center',marginTop:5}}>{this.props.menu}</Text>
                    <Text style={{textAlign:'center',marginTop:5,color:'#fd7166'}}>¥{this.props.price}</Text>
                    {/*<Text style={{textAlign:'center',marginTop:5,fontSize:12}}>神奈川県横浜市</Text>*/}
                    </View>
                </TouchableOpacity>
                
                {/*
                <Text>AAA</Text>
                */}
            </View>
        );
    }
}
export default Reservecomp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileStyle:{
        marginTop:10,
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#fbfafa',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#f8f8f8',
        height:100,
        shadowColor:"black",
        shadowOffset:{height:2},
        shadowOpacity:0.3,
    }
});