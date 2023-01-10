import React, { useState } from 'react'
import { Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  TouchableOpacity,
StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage' 
import { Button } from '../../components/MyButton'
import '../../config/firebase'
import { styles } from './LoginScreenStyles'
import { StackScreenProps } from "@react-navigation/stack";
<<<<<<< HEAD
import { useNavigation, NavigationProp } from '@react-navigation/native';
=======
>>>>>>> a9d09dfa3d1fdd247766faaf0380c9a12e285cc6
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();


<<<<<<< HEAD

const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation: <NavigationProp>()
=======
const LoginScreen = ({navigation}: {navigation: any}) => {
>>>>>>> a9d09dfa3d1fdd247766faaf0380c9a12e285cc6
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const forgotPassword = async() =>{
      if (email === "") {
        Alert.alert("Email and password are mandatory.");
    } 
    else {
    sendPasswordResetEmail(auth , email)
        .then(() => {
            Alert.alert("reset email sent to " + email);
        })
        .catch( (e) => {
            Alert.alert("Something went wrong, try again!!");
            console.log(e)
        });
    }
  }

  const handleSignIn =async() => {
    if (email === '' || password === '') {
     Alert.alert('Email and password are mandatory.')
     
      return;
    }
    else {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
            Alert.alert("logged in " + email);
        });
      console.log('Signed in');
    } catch (error) {      
          console.log("hi");
      }
    }
  }


    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
        <View style={styles.inputContainer}>
          <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          />
          <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
          onPress={handleSignIn}
          title="Sign In" />
          <Button
          onPress={forgotPassword} 
          title="Forgot Password?"
          style={ styles.button}
          textStyle ={ styles.text}
          />
          <Text style={styles.outlineText} onPress={() => navigation.navigate("Sign Up")}>
            Don't Have an account? {" ->> "} 
          </Text>
          
        </View>
      </KeyboardAvoidingView>
    )
}

export default LoginScreen
