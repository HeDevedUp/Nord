import React, { useState } from 'react'
import {
     KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
  View,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage' 
import { Button } from '../../components/MyButton'
import '../../config/firebase'
import { styles } from './RegisterScreenStyles'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection,doc,getFirestore, initializeFirestore, serverTimestamp, setDoc } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore()
const colRef = collection(db, 'users') 


const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = async() => {
    if (email === '' || password === '') {
     Alert.alert('Email and password are mandatory.')
      return;
    }
    else {
      try {
        await createUserWithEmailAndPassword(auth, email, password).
        then(cred => {
        console.log(cred.user.uid);
        console.log(cred.user.email);

          addDoc(colRef, {
          user_id: cred.user.uid,
          email: cred.user.email,
          })
        })
      } 
      catch {
        return;
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
          <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.outlineText}>
            Already Have an account? {" ->> "} 
          </Text>
        </View>
      </KeyboardAvoidingView>
    )
}

export default RegisterScreen