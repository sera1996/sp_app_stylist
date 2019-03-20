import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class Callabel extends Component {
    render() {
        return (
            <View>
                <Text></Text>
                <TouchableOpacity style={styles.calLabel}>
                    <Text style={{textAlign:'center',marginTop:12}}>
                        {this.props.day}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Callabel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
        calLabel:{
        marginLeft:20,
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:0.5
    }
});