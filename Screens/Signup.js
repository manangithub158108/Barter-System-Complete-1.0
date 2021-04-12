import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';

export default class Signup extends Component{

    state = {
        email : '',
        password : '',
        name : '',
        address : '',
        phone_no : ''
    };

    userSignup = () => {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
        );
        firestore.collection('users').add({
            'email' : this.state.email,
            'name' : this.state.name,
            'address' : this.state.address,
            'phone_no': this.state.phone_no
        })
        this.props.navigation.navigate('Login');
        alert('User Signed up successfully');
    }

  render(){
    return(
      <View style = {{
          backgroundColor : '#222831',
          height : '100%'
      }}>
        <TextInput onChangeText = {(text) => {
              this.setState({
                  name : text
              })
          }} placeholder = {'Enter name'} style = {style.email}></TextInput>
          <TextInput onChangeText = {(text) => {
              this.setState({
                  address : text
              })
          }} placeholder = {'Enter address'} style = {style.address} multiline = {true}></TextInput>
          <TextInput onChangeText = {(text) => {
              this.setState({
                  phone_no : text
              })
          }} placeholder = {'Enter phone number'} style = {style.phone_no}></TextInput>
          <TextInput onChangeText = {(text) => {
              this.setState({
                  email : text
              })
          }} placeholder = {'Enter email'} style = {style.phone_no}></TextInput>
          <TextInput onChangeText = {(text) => {
              this.setState({
                  password : text
              })
          }} placeholder = {'Enter password'} secureTextEntry = {true} style = {style.password}></TextInput>
          <TouchableOpacity onPress = {() => {
              this.userSignup();
          }}>
              <Text style = {style.button}> Signup </Text>
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


