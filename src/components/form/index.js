import React from 'react'
import styles from './index.styl'
import InputEmail from '../input-mail'
import InputPass from '../input-pass'
import ButtonLogin from '../button-login'
import ForgotPass from '../forgot-pass'

const Form  = () => (
  <form className={styles.form}>
    <InputEmail/>
    <InputPass/>
    <ButtonLogin/>
    <ForgotPass/>
  </form>
)

export  default Form
