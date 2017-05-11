import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
 componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDxVXeoctWPuGj6HlhAWwAJdd5PRDt98LY',
            authDomain: 'authentication-9f27e.firebaseapp.com',
            databaseURL: 'https://authentication-9f27e.firebaseio.com',
            storageBucket: 'authentication-9f27e.appspot.com',
            messagingSenderId: '744279226808'
        };
  firebase.initializeApp(config);
  }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
};

export default App;