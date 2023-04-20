import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="main-home-cont">
    <Header />
    <div className="home-card">
      <div className="home-content">
        <h1 className="home-head">Find The Job That Fits Your Life</h1>
        <p className="home-desc">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button className="home-btn" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default Home
