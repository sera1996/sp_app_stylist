import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Gnar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Gnar</Text>
            </View>
        );
    }
}
export default Gnar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});