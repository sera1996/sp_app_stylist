import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Confirm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Confirm</Text>
            </View>
        );
    }
}
export default Confirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});