import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { add, minus, reset, selectCartCount } from '../features/cartCounterSlice'

const HomeNav = () => {
  const cartCount = useSelector(selectCartCount);
  
  const navigate = useNavigate()
  const handleCart = (e) => {
    e.preventDefault()
    navigate("/cart")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CleanEase Portal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleCart}>
              <button className="btn btn-outline-dark" type="submit">
                {/* <i className="bi-cart-fill me-1"></i> */}
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill"> {cartCount} </span>
                {/* {navCartCount}</span> */}
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default HomeNav