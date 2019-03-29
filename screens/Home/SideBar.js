import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {Button,
Container,
Content,Title,
List, ListItem,} from 'native-base';
class SideBar extends Component {
    render() {
        return (
            <Container>
            <Content>
            <View style={styles.container}>
                <View style={{marginTop:60}}>
                    {/*
                    <Title>お悩みタグ</Title>
                    <Button info style={styles.button}>
                        <Text style={{color:'white',fontSize:16}}>くせ毛</Text>
                    </Button>
                    <Button info style={styles.button}>
                        <Text style={{color:'white',fontSize:16}}>ボリューム</Text>
                    </Button>
                    <Button info style={styles.button}>
                        <Text style={{color:'white',fontSize:16}}>直毛</Text>
                    </Button>
                    */}
                    <List>
                        <ListItem itemDivider>
                            <Text style={styles.text}>お悩みタグ</Text>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>くせ毛</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>ボリューム</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>ダメージ</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>髪質</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem>
                            <TouchableOpacity>
                            <Text style={styles.text2}>チン毛</Text>
                            </TouchableOpacity>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text style={styles.text}>場所を指定</Text>
                        </ListItem>
                    </List>
                </View>
            </View>
            </Content>
            </Container>
        );
    }
}
export default SideBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*alignItems: 'center',
        justifyContent: 'center',*/
        backgroundColor:'#FFF'
    },
    button:{
        marginLeft:20,
        paddingLeft:30,
        paddingRight:30,
        marginTop:5
    },
    text:{
        fontSize:20
    },
    text2:{
        fontSize:18
    }
});