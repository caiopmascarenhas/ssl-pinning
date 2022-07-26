/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const fetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1', {
        // httpsAgent: new https.Agent({
        //   cert: '9SLklscvzMYj8f+52lp5ze/hY0CFHyLSPQzSpYYIBm8=',
        //   key: '9SLklscvzMYj8f+52lp5ze/hY0CFHyLSPQzSpYYIBm8=',
        // }),
      })
      .then(response => {
        console.log('then');
        // console.log(JSON.stringify(response.bodyString, null, '\t'));
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
  };

  const secureFetchData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1', {})
      .then(response => {
        console.log('then');
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native SSL Pinning Testing</Text>
      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.text}>Fetch data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={secureFetchData}>
        <Text style={styles.text}>Fetch secured data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    marginVertical: 10,
    marginBottom: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 12,
    cursor: 'pointer',
  },
});

export default App;
