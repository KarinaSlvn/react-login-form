import React from 'react'
import styles from '../../assets/styles/main.styl'
import iconEmail from '../../assets/images/mail.png'

class InputMail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      emailValid: false,
      focused: false
    }
  }

  handleUserInput (e) {
    const value = e.target.value
    this.setState({
        email: value,
        focused: true
      },
      () => {
        this.validateField(value)
      }
    )
  }

  validateField (value) {
    let validation = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    if (validation !== null) {
      this.setState({
        emailValid: true
      })
    } else {
      this.setState({
        emailValid: false
      })
    }
  }

  getStyleForInput () {
    if (this.state.focused) {
      return this.state.emailValid ? styles.inputValid : styles.inputNoValid
    } else {
      return styles.input
    }
  }

  displayMarks () {
    return this.state.emailValid === false && this.state.focused ? 'flex' : 'none'
  }

  render () {
    return (
      <div className={styles.inputContainer}>
        <input type="email" className={this.getStyleForInput()} placeholder='E-mail' value={this.state.email}
               onChange={(event) => this.handleUserInput(event)}/>
        <img src={iconEmail} alt="icon-email" className={styles.icon}/>
        <span className={styles.checkMark} style={{display: this.state.emailValid ? 'flex' : 'none'}}>&#x2714;</span>
        <span className={styles.incorrect} style={{display: this.displayMarks()}}>&#x2716;</span>
        <p className={styles.incorrectText} style={{display: this.displayMarks()}}>Invalid Username</p>
      </div>
    )
  }

}

export default InputMail
