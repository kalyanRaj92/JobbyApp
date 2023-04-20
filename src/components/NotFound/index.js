import './index.css'

const NotFound = () => (
  <div className="not-found-cont">
    <img
      className="not-found-image"
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
    />
    <h1 className="not-found-head">Page Not Found</h1>
    <p className="not-found-desc">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)
export default NotFound
