import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class AddItem extends Component{

    state = {
        item_name : '',
        item_description : '',
        name : '',
        address : '',
        id : '',
        phone_no : '',
        item_cost : '',
    }

    componentDidMount = () => {

        const uid = firebase.auth().currentUser.email;
        firestore.collection('users').where('email', '==', uid).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                var user_data = doc.data();
                var id = doc.id;
                this.setState({
                    id : id,
                    name : user_data.name,
                    address : user_data.address,
                    phone_no : user_data.phone_no
                })
            })
        })
    }

    addItem = () => {

        const uid = firebase.auth().currentUser.email;

        firestore.collection('items').add({
            'item_name' : this.state.item_name,
            'item_description' : this.state.item_description,
            'creator_name' : this.state.name,
            'creator_address' : this.state.address,
            'creator_no' : this.state.phone_no,
            'creator_email' : uid,
            'item_cost' : this.state.item_cost
        })

        firestore.collection('notifications').add({
            'item_name' : this.state.item_name,
            'created' : firebase.firestore.FieldValue.serverTimestamp(),
            'creator_email' : uid,
            'creator_name' : this.state.name,
            'Status' : 'Item added successfully'
        })

        alert('Item added successfully');
    }

    render(){
        return(
            <View style = {{
                backgroundColor : '#222831',
                height : '100%'
            }}>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        item_name : text
                    })
                }} placeholder = {'Enter item name'} style = {style.email}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        item_description : text
                    })
                }} placeholder = {'Enter item description'} style = {style.address}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        item_cost : text
                    })
                }} placeholder = {'Enter item cost '} style = {style.phone_no}></TextInput>
                <TouchableOpacity onPress = {() => {
                    this.addItem();
                }}>
                    <Text style = {style.button}>Add item</Text> 
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


