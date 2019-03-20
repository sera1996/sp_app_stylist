import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class Calcomp extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
            <View>
                <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label1}</Text>
                <TouchableOpacity style={styles.calContent}></TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label2}</Text>
                <TouchableOpacity style={styles.calContent}></TouchableOpacity>
            </View>
            <View>
            <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label3}</Text>
            <TouchableOpacity style={styles.calContent}></TouchableOpacity>
            </View>
            <View>
                <Text style={{textAlign:'center',marginLeft:20}}>{this.props.label4}</Text>
                <TouchableOpacity style={styles.calContent}></TouchableOpacity>
            </View>
        </View>
        );
    }
}
export default Calcomp;

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
    }
});