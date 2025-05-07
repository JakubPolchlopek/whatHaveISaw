import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p>© 2025 Where Have I Been – Jakub Połchłopek</p>
      <div className='footer-icons'>
        <a
          href='https://github.com/your-username/your-repo'
          target='_blank'
          rel='noopener noreferrer'
          className='footer-icon'
        >
          <FontAwesomeIcon
            icon={faGithub}
            size='2x'
          />
        </a>
        <a
          href='https://instagram.com/your-instagram-handle'
          target='_blank'
          rel='noopener noreferrer'
          className='footer-icon'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size='2x'
          />
        </a>
      </div>
    </footer>
  )
}
