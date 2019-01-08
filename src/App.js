import React, { Component } from 'react';
import Firebase from './Firebase';
import FirebaseContext from './FirebaseContext';
import GlobalStyle from './GlobalStyle';
import AppContent from './AppContent';

class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <GlobalStyle />
        <AppContent />
      </FirebaseContext.Provider>
    );
  }
}

export default App;
