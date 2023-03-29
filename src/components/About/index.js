// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <div className="about-container">
      <Header />
      <h1 className="about-text">About Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default About
