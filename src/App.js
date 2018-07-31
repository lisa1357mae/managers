import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // a middleware - which needs a helper applyMiddleware
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
    const store = createStore(reducers, {}, applyMiddleware (ReduxThunk)); //store enhancer

  return (
      <Provider store={store}>

        <LoginForm />
      </Provider>
    );
  }
}

export default App;
