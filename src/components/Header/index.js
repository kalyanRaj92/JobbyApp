import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdHome, MdWork} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="header-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
      </Link>
      <div className="routes-cont">
        <ul className="lg-list">
          <li className="header-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="header-item">
            <Link to="/jobs" className="link">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          className="header-logout-button"
          type="submit"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
      <ul className="sm-container">
        <li className="sm-list-item">
          <Link to="/" className="l">
            <MdHome className="icons" />
          </Link>
        </li>
        <li className="sm-list-item">
          <Link to="/jobs" className="l">
            <MdWork className="icons" />
          </Link>
        </li>
        <li className="sm-list-item">
          <button type="submit" className="button-icon" onClick={onClickLogout}>
            <FiLogOut className="icons" />
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
