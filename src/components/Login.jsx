import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import loginServices from '../services/loginServices';
import { useToast } from "./ToastContext";

const Login = () => {

  const toast = useToast()
  const navigate = useNavigate()

  const validate = (values) => {
    const errors = {}

    if (!values.email)
       errors.email = "Enter Email Id"

    if (!values.password)
        errors.password = "Enter password"

    return errors
}

  const userFormik = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    validate,
    onSubmit : values => {
      console.log("Formik submission")
      loginServices.login(values.email,values.password)
      .then(response => {
        toast.addToast('Login Success','success')
        userFormik.resetForm()
        // redirect to Services page
        setTimeout(() => {
          navigate("/services");
        }, 500);
      })
      .catch(error => {
        console.log(error)
        toast.addToast(`Login Failed: ${error.response.data.error}`,'danger')
      });
    }
  })

  const error_style = {
    color: "red"
}

  return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3" style={{marginLeft:"-25px"}}>
              <div className="card">
                <div className="card-header" id="login-hdr">
                  Login
                </div>
                <div className="card-body">
                  <form onSubmit={userFormik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">User Name</label>
                      <input type="email" className="form-control" id="email" 
                        {...userFormik.getFieldProps('email')}/>
                    </div>
                    {userFormik.errors.email ? <div style={error_style}>{userFormik.errors.email}</div> : null}
                    <br />
                     <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" 
                        {...userFormik.getFieldProps('password')}/>
                    </div>
                    {userFormik.errors.password ? <div style={error_style}>{userFormik.errors.password}</div> : null}
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>
              </form>
              <br />
              <p>Don't have an account? <Link to="/register">Register</Link></p>
              <p>Forgot Password? <Link to="/forgotpwd">Click Here</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login;