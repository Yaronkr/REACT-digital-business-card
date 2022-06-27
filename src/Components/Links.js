import '../Styles/Links.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faHackerrank} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Links () {
  return (

    <div className="links--container">
      <ul>
        <li>
          <a href="https://github.com/Yaronkr">
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </a>
        </li>

        <li>
          <a href=" https://www.youtube.com/channel/UC_5OZECLeKBqoBqXG9kShbA">
            <FontAwesomeIcon icon={faYoutube} className="icons" />
          </a>
        </li>

        <li>
          <a href="https://www.hackerrank.com/yaron?hr_r=1">
            <FontAwesomeIcon icon={faHackerrank} className="icons" />
          </a>
        </li>
      </ul>
    </div>
  )
}
