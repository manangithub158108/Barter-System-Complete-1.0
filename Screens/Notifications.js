import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class Notifications extends Component{

    state = {
        all_notifications : []
    }

    componentDidMount = () => {

        const uid = firebase.auth().currentUser.email;
        firestore.collection('notifications').where('creator_email', '==', uid).onSnapshot((snapshot) => {
            var all_notifications = snapshot.docs.map((doc) => doc.data());
            this.setState({
                all_notifications : all_notifications
            })
        })
    }

    renderItem = ({item}) => (
        <ListItem
        title = {item.item_name}
        subtitle = {item.message}
        ></ListItem>
    )

    render(){
        return(
            <View style = {{
                backgroundColor : '#222831'
            }}>
                <Text style = {style.text}> List of all notifications </Text>
                <FlatList
                data = {this.state.all_notifications}
                renderItem = {this.renderItem}></FlatList>
            </View>
        )
    }
}

const style = StyleSheet.create({
    text : {
        display : 'flex',
        color : '#eeeeee',
        marginTop : 30,
        marginBottom : 30,
        textAlign : 'center',
        fontSize : 30,
        justifyContent : 'center'
    },
})