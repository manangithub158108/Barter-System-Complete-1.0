import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default class Settings extends Component{

    state = {
        name : '',
        address : '',
        phone_no : '',
        updatedName : '',
        updatedAddress : '',
        updatedPhone_no : '',
        id : ''
    }

    componentDidMount = () => {
        const uid = firebase.auth().currentUser.email;

        firestore.collection('users').where('email', '==', uid).onSnapshot((snaphot) => {
            snaphot.docs.map((doc) => {
                var user_data = doc.data();
                this.setState({
                    name : user_data.name,
                    address : user_data.address,
                    phone_no : user_data.phone_no,
                })
            })
        })
    }

    updatedProfile = async() => {
        const uid = firebase.auth().currentUser.email;
        await firestore.collection('users').where('email', '==', uid).onSnapshot((snaphot) => {
            snaphot.docs.map((doc) => {
                var id = doc.id;
                this.setState({
                    id : id
                })
            })
        })

        await firestore.collection('users').doc(this.state.id).update({
            'name' : this.state.updatedName,
            'address' : this.state.updatedAddress,
            'phone_no' : this.state.updatedPhone_no,
        })

        alert('Profile has been updated successfully');
    }

    render(){
        return(
            <View style = {{
                backgroundColor : '#222831',
                height : '100%'
            }}>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        updatedName : text
                    })
                }} defaultValue = {this.state.name} placeholder = {'Enter name'} style = {style.email}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        updatedPhone_no : text
                    })
                }} defaultValue = {this.state.phone_no} placeholder = {'Enter phone number'} style = {style.phone_no}></TextInput>
                <TextInput onChangeText = {(text) => {
                    this.setState({
                        updatedAddress : text
                    })
                }} defaultValue = {this.state.address} placeholder = {'Enter address'} style = {style.address}></TextInput>
                <TouchableOpacity onPress = {() => {
                    this.updatedProfile();
                }}>
                    <Text style = {style.button}> Update Profile </Text>
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


