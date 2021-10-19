import { FaThumbsUp, FaThumbsDown, FaRegImages } from 'react-icons/fa'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to={'/'}>
          <FaRegImages />
        </Link>

        <ul className={styles.rightNav}>
          <li>
            <Link to={'/like'}>
              <FaThumbsUp style={{ color: 'green' }} />
            </Link>
          </li>
          <li>
            <Link to={'/dislike'}>
              <FaThumbsDown style={{ color: 'red' }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
