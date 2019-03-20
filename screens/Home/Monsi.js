import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Monsi extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Monsi</Text>
            </View>
        );
    }
}
export default Monsi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});