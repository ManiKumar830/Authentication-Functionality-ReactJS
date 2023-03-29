// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <p className="header-text">Home</p>
    </Link>

    <Link to="/about">
      <p className="header-text">About</p>
    </Link>
  </div>
)
export default Header
