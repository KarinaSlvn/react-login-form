import React from 'react'
import styles from './index.styl'
import Input from '../input'
import ButtonLogin from '../button-login'
import ForgotPass from '../forgot-pass'
import iconEmail from '../../assets/images/mail.png'
import iconPass from '../../assets/images/lock.png'

const Form = () => (
  <form className={styles.form}>
    <Input name='email' placeholder='E-mail' icon={iconEmail} invalidMessage = 'Invalid Username'/>
    <Input name='password' placeholder='Password' icon={iconPass} invalidMessage = 'Invalid Password'/>
    <ButtonLogin/>
    <ForgotPass/>
  </form>
)

export default Form
