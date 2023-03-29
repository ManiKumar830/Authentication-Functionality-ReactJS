// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  return (
    <button onClick={onClickLogout} type="button">
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
