import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Taric extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Taric</Text>
            </View>
        );
    }
}
export default Taric;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});