import React from 'react';
import styles from './assets/styles/index.styl';
import Logo from './components/logo';
import Form from './components/form'

function App() {
  return (
    <div className={styles.loginForm}>
      <Logo/>
      <Form/>
    </div>
  );
}

export default App;
