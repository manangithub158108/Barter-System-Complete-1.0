import React, {Component} from 'react';
import { TextInput } from 'react-native';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import firestore from '../config';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default class Login extends Component{

    state = {
        email : '',
        password : ''
    };

    userLogin = () => {
        firebase.auth().signInWithEmailAndPassword(
            this.state.email, this.state.password
        );
        this.props.navigation.navigate('Home');
        alert('User Logged in successfully');
    }

  render(){
    return(
      <View style = {{
          backgroundColor : '#222831',
          height : '100%',
      }}>
          <TextInput onChangeText = {(text) => {
              this.setState({
                  email : text
              })
          }} placeholder = {'Enter email'} style = {style.email}></TextInput>
          <TextInput onChangeText = {(text) => {
              this.setState({
                  password : text
              })
          }} placeholder = {'Enter password'} secureTextEntry = {true} style = {style.password}></TextInput>
          <TouchableOpacity onPress = {() => {
              this.userLogin();
          }}>
              <Text style = {style.button}> Login </Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
    email : {
        display : 'flex',
        color : '#eeeeee',
        marginTop : 200,
        marginBottom : 30,
        textAlign : 'center',
        fontSize : 20,
        justifyContent : 'center',
        borderRadius : 40,
        width : '80%',
        height : 40,
        backgroundColor : '#393e46',
        alignSelf : 'center'
    },

    password : {
        display : 'flex',
        color : '#eeeeee',
        marginBottom : 30,
        textAlign : 'center',
        fontSize : 20,
        justifyContent : 'center',
        borderRadius : 40,
        width : '80%',
        height : 40,
        alignSelf : 'center',
        backgroundColor : '#393e46'
    },

    button : {
        display : 'flex',
        color : '#eeeeee',
        marginTop : 30,
        marginBottom : 30,
        textAlign : 'center',
        fontSize : 20,
        justifyContent : 'center',
        borderRadius : 40,
        width : '80%',
        height : 40,
        alignSelf : 'center',
        backgroundColor : '#00adb5'
    },
})
