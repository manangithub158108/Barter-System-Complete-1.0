import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default class Home extends Component{

    state = {
        allItems : [],
    }

    componentDidMount = () => {

        const uid = firebase.auth().currentUser.email;

        firestore.collection('items').onSnapshot((snapshot) => {
            var allItems = snapshot.docs.map((doc) => doc.data());
            this.setState({
                allItems : allItems
            })
        })
    }

    renderItem = ({item}) => (
        <ListItem
        title = {
            item.item_name
        }
        subtitle = {item.item_description + ',' + 'cost = ' + item.item_cost}
        rightElement = {
            <TouchableOpacity onPress = {() => {
                this.props.navigation.navigate('MyBarters', {'item_details' : item})
                firestore.collection('notifications').add({
                    'item_name' : item.item_name,
                    'Status' : 'unread',
                    'message' : 'People have shown interest in your item'
                })
            }}>
                <Text> View </Text>
            </TouchableOpacity>
        }></ListItem>
    )

    render(){
        return(
            <View style = {{
                backgroundColor : '#222831'
            }}>
                <Text style = {style.text}> List of all Items </Text>
                <FlatList
                data = {
                    this.state.allItems
                }
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
    },
})