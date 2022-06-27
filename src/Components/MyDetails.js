import '../Styles/MyDetails.css'
import profile from '../Images/my_pictures.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function MyDetails () {
  return (
    <main>
      <img className="profile--picture" src={profile} alt="profile picture"/>
      <h2 className="Name">Yaron Kraushar</h2>
      <h4 className="proffesion">Software Engineer</h4>
      <a className="mysite" href="https://troopl.com/ronkr">My Site</a>
      <div className="buttons">
        <div className="email--button">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <a className="myemail" href="mailto: ron.kra@outlook.com">Email</a>
          </div>
        </div>
        <div className="linkedin--button">
          <div>
            <FontAwesomeIcon icon={faLinkedin} className="linkedin--icon"/>
            <a className="mylinkedin" href="https://www.linkedin.com/in/ronkra/">LinkedIn</a>
          </div>
        </div>
      </div>
   </main>
  )
}
