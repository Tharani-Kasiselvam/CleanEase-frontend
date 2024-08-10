import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
        <div className="container-fluid" id="glob-nav-div">
          <NavLink className="navbar-brand" to="/" id="glob-nav-font">
          <img src="./src/assets/clean_logo.png" alt="ce_logo" style={{height:"30px",marginBottom:"10px", marginRight:"5px"}}/>CleanEase Portal</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="glob-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" id="nav-font">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/register" id="nav-font">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" id="nav-font">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" id="nav-font">Services</NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleCart}>
            <NavLink className="nav-link" to="/login" id="nav-font">Logout&emsp;&emsp;</NavLink>
              <button className="btn btn-outline-dark" type="submit" id="cart-font">
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