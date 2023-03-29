// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setJwtTokenInCookies = token => {
    Cookies.set('jwt_token', token, {expires: 30})

    const {history} = props

    history.replace('/')
  }

  const onClickLoginButton = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setJwtTokenInCookies(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="login-text">Please Login</h1>
      <button onClick={onClickLoginButton} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
