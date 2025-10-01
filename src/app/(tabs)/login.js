import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert, TextInput, Link } from 'react-native';
import React, { useState } from 'react';

export default function app() {
    const [text, onChangeText] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
          <View style={styles.container1}>
      <Text style={styles.boldText}>Login</Text >
      <Link href="/about">About screen</Link>
      <StatusBar style="auto" />
      
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Email address'
        />
      <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Password'
          secureTextEntry={true}
        />
      <Button
          title="LOGIN"
          color= "#ba55c0ff"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e8e8ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
    container1: {
    flex: 8,
    backgroundColor: '#c79fbcff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    width: '80%', 
    margin: 12,
    borderWidth: 0,
    padding: 0,
    borderColor: '#ba55c0',
    borderRadius: 5,
  },
    boldText: {
    fontWeight: 'bold',
    fontSize: 24, 
    marginBottom: 20, 
  },
  input: {
    height: 40,
    width: '80%', 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ede6edff',
    borderRadius: 5,
  },
});