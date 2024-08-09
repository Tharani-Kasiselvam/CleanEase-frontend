import { Link } from "react-router-dom";
import registerServices from '../services/registerServices';
import { useFormik } from "formik";
// import { ToastContainer } from 'react-toastify';
import { useToast } from "./ToastContext";


const Register = () => {
  const toast = useToast()

  const validate = (values) => {
    const errors = {}

    if (!values.firstname)
        errors.firstname = "Enter Student First Name"

    if (!values.lastname)
    errors.lastname = "Enter Student Last Name"

    if (!values.email)
    errors.email = "Enter Student Email Id"

    if (!values.password)
        errors.password = "Enter password"

    return errors
}

  const registerFormik = useFormik({
    initialValues: {
      firstname : "",
      lastname : "",
      email : "",
      password : ""
    },
    validate,
    onSubmit : values => {
      console.log("Formik submission")

      registerServices.register(values.firstname, values.lastname,values.email, values.password)
      .then((response) => {
        toast.addToast(`Registration Success: ${response.data.message}`,"success")
        console.log(response.data.message)
        registerFormik.resetForm()
      }).catch(error => {
        toast.addToast(`Registration Failed: ${error.response.data.error}`,"danger")
        console.log(error)
      })
    }
  })

  const error_style = {
    color: "red"
  }

  return (
    <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3" style={{marginLeft:"-25px"}}>
              <div className="card">
                <div className="card-header" id="reg-hdr">
                  Register
                </div>
                <div className="card-body">
                  <form onSubmit={registerFormik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="fname" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstname" 
                        {...registerFormik.getFieldProps('firstname')}/>
                    </div>
                    {registerFormik.errors.firstname ? <div style={error_style}>{registerFormik.errors.firstname}</div> : null}
                    <br />
                    <div className="mb-3">
                      <label htmlFor="lname" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastname" 
                        {...registerFormik.getFieldProps('lastname')}/>
                    </div>
                    {registerFormik.errors.lastname ? <div style={error_style}>{registerFormik.errors.lastname}</div> : null}
                    <br />
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Id</label>
                      <input type="email" className="form-control" id="email" 
                        {...registerFormik.getFieldProps('email')}/>
                    </div>
                    {registerFormik.errors.email ? <div style={error_style}>{registerFormik.errors.email}</div> : null}
                    <br />
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" 
                        {...registerFormik.getFieldProps('password')}/>
                    </div>
                    {registerFormik.errors.password ? <div style={error_style}>{registerFormik.errors.password}</div> : null}
                    <br />
                    <button type="submit" className="btn btn-primary">Register</button>
              </form>
              <br />
              <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer position="top-center" theme="colored" className="p-3 text-align-center"/> */}
      </div>
  )
}

export default Register;