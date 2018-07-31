import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
  apiKey: 'AIzaSyAiQ03k_B0_fhjGhJTTfcFaFaeobO0Ra7I',
  authDomain: 'managerapp-b37cc.firebaseapp.com',
  databaseURL: 'https://managerapp-b37cc.firebaseio.com',
  projectId: 'managerapp-b37cc',
  storageBucket: 'managerapp-b37cc.appspot.com',
  messagingSenderId: '275477648354'
};

    firebase.initializeApp(config);
  }

  render() {

  return (
      <Provider store={createStore(reducers)}>

        <LoginForm />
      </Provider>
    );
  }
}

export default App;
