import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class MyBarters extends Component{

    state = {
        item_name : this.props.navigation.getParam('item_details')['item_name'],
        item_description : this.props.navigation.getParam('item_details')['item_description'],
        creator_name : this.props.navigation.getParam('item_details')['creator_name'],
        creator_address : this.props.navigation.getParam('item_details')['creator_address'],
        creator_no : this.props.navigation.getParam('item_details')['creator_no'],
        item_cost : this.props.navigation.getParam('item_details')['item_cost'],
        creatorEmail : this.props.navigation.getParam('item_details')['creator_email'],
        id : ''
    }

    exchangeFunction = async() => {
        firestore.collection('recievedItems').add({
            'item_name' : this.state.item_name,
            'item_description' : this.state.item_description,
            'Status' : 'recieved',
            'email' : firebase.auth().currentUser.email
        });

         firestore.collection('notifications').add({
             'user' : this.state.creator_name,
             'item_name' : this.state.item_name,
             'message' : 'Items has been exchange successfully',
             'creator_email' : this.state.creatorEmail
         });

         alert('Item has been exchanged succesfully');
    }

    render(){
        return(
            <View style = {{
                backgroundColor : '#222831',
                height : '100%'
            }}>
                <Text style = {style.email}> Item name : {this.state.item_name} </Text>
                <Text style = {style.address}> Item description : {this.state.item_description} </Text>
                <Text style = {style.phone_no}> Cost of the item : {this.state.item_cost} </Text>
                <Text style = {style.phone_no}> creator name : {this.state.creator_name} </Text>
                <Text style = {style.phone_no}> creator phone number : {this.state.creator_no} </Text>
                <Text style = {style.phone_no}> creator address : {this.state.creator_address} </Text>
                <TouchableOpacity onPress = {() => {
                    this.exchangeFunction();
                    this.props.navigation.navigate('Home');
                }}>
                    <Text style = {style.button}> I want to Exchange </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    email : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 40,
        marginTop : 100,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },

    phone_no : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 40,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },

    address : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 200,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },

    password : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#393e46',
        width : '80%',
        height : 40,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },

    button : {
        display : 'flex',
        justifyContent : 'center',
        alignSelf : 'center',
        color : '#eeeeee',
        backgroundColor : '#00adb5',
        width : '80%',
        height : 40,
        marginTop : 10,
        marginBottom : 20,
        textAlign : 'center',
        fontSize : 20,
        borderRadius : 30
    },
})


