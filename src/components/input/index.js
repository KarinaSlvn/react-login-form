import React from 'react'
import {validate} from './utils'
import styles from '../../assets/styles/main.styl'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      valid: false,
      focused: false
    }
  }

  handleUserInput ({target: {type, value}}) {
    this.props.onChange(value)
    this.setState({
        focused: true
      },
      () => {
        this.validateField(type, value)
      }
    )
  }

  setValidationValue (resultValidation) {
    this.setState({
      valid: resultValidation !== null
    })
  }

  validateField (type, value) {
    this.setValidationValue(validate(value, type))
  }

  getStyleForInput () {
    if (this.state.focused) {
      return this.state.valid ? styles.inputValid : styles.inputNoValid
    } else {
      return styles.input
    }
  }

  displayMarks () {
    return this.state.valid === false && this.state.focused ? 'flex' : 'none'
  }

  render () {
    const {name, placeholder, icon, invalidMessage, value} = this.props
    return (
      <div className={styles.inputContainer}>
        <input type={name} className={this.getStyleForInput()} placeholder={placeholder} value={value}
               onChange={this.handleUserInput.bind(this)} autoComplete='new-password'/>
        <img src={icon} alt={name} className={styles.icon}/>
        <span className={styles.checkMark} style={{display: this.state.valid ? 'flex' : 'none'}}>&#x2714;</span>
        <span className={styles.incorrect} style={{display: this.displayMarks()}}>&#x2716;</span>
        <p className={styles.incorrectText} style={{display: this.displayMarks()}}>{invalidMessage}</p>
      </div>
    )
  }

}

export default Input
