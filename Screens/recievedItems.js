import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class recievedItems extends Component{

    state = {
        all_recieved_items : ''
    }

    componentDidMount = () => {

        const uid = firebase.auth().currentUser.email;
        firestore.collection('recievedItems').where('email', '==', uid).onSnapshot((snapshot) => {
            var all_recieved_items = snapshot.docs.map((doc) => doc.data());
            this.setState({
                all_recieved_items : all_recieved_items
            })
        })
    }

    renderItem = ({item}) => (
        <ListItem
        title = {item.item_name}
        subtitle = {item.item_description}
        rightElement = {
            <Text> {item.Status} </Text>
        }></ListItem>
    )

    render(){
        return(
            <View style = {{
                backgroundColor : '#222831',
                height : '100%'
            }}>
                <Text style = {style.text}> List of All recieved items </Text>
                <FlatList
                data = {this.state.all_recieved_items}
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
        justifyContent : 'center',
        backgroundColor : '#222831'
    },
})