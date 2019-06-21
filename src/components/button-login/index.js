import React, {Component} from 'react'
import styles from './index.styl'

const ButtonLogin = ({onClick}) => <button onClick={onClick} className={styles.login}>Login</button>

export default ButtonLogin
