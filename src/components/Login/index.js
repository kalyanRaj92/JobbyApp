import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {userName: '', passWord: '', errorMsg: '', isError: false}

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passWord: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, passWord} = this.state
    const userDetails = {
      username: userName,
      password: passWord,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      const message = data.error_msg
      this.setState({errorMsg: message, isError: true})
    }
  }

  render() {
    const {userName, passWord, isError, errorMsg} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-cont">
        <div className="login-card">
          <img
            className="login-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
          <form className="login-form" onSubmit={this.submitForm}>
            <label className="label1" htmlFor="input1">
              USERNAME
            </label>
            <input
              className="input-ele"
              type="text"
              value={userName}
              id="input1"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
            <label className="label1" htmlFor="input2">
              PASSWORD
            </label>
            <input
              className="input-ele"
              type="password"
              value={passWord}
              id="input2"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button className="login-btn" type="submit">
              Login
            </button>
            {isError && <p className="error-display">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
