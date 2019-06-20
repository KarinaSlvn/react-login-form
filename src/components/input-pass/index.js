import React from 'react'
import styles from '../../assets/styles/main.styl'
import iconPass from '../../assets/images/lock.png'

class InputPass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pass: '',
      passValid: false,
      focused: false
    }
  }

  handleUserInput (e) {
    const value = e.target.value
    this.setState({
        pass: value,
        focused: true
      },
      () => {
        this.validateField(value)
      }
    )
  }

  validateField (value) {
    let validation = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i)
    if (validation !== null) {
      this.setState({
        passValid: true
      })
    } else {
      this.setState({
        passValid: false
      })
    }
  }

  getStyleForInput () {
    console.log(this.state.focused)
    if (this.state.focused) {
      return this.state.passValid ? styles.inputValid : styles.inputNoValid
    } else {
      return styles.input
    }
  }

  displayMarks () {
    return this.state.passValid === false && this.state.focused ? 'flex' : 'none'
  }

  render () {
    return (
      <div className={styles.inputContainer}>
        <input type="password" className={this.getStyleForInput()} placeholder='Password' value={this.state.email}
               onChange={(event) => this.handleUserInput(event)} autoComplete='new-password'/>
        <img src={iconPass} alt="icon-lock" className={styles.icon}/>
        <span className={styles.checkMark} style={{display: this.state.passValid ? 'flex' : 'none'}}>&#x2714;</span>
        <span className={styles.incorrect}
              style={{display: this.displayMarks()}}>&#x2716;</span>
        <p className={styles.incorrectText}
           style={{display: this.displayMarks()}}>Invalid
          Password</p>
      </div>
    )
  }

}

export default InputPass
