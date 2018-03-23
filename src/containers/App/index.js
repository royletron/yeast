import React from 'react';
import { hot } from 'react-hot-loader'
import styles from './style.css';

class App extends React.Component {
  render () {
    return (
      <p className={styles.this}>Hello World</p>
    )
  }
}

export default hot(module)(App)
