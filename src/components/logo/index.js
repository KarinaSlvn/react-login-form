import React from 'react'
import logoImg from '../../assets/images/logo.svg'
import styles from './index.styl'

const Logo = () => (
  <a href="#">
    <img src={logoImg} alt="logo" className={styles.logo}/>
  </a>
)

export default Logo

