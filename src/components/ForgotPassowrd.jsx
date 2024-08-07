import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import passwordResetService from '../services/passwordResetService';
import { useToast } from "./ToastContext";
import '../App.css'

const ForgotPassowrd = () => {

  const toast = useToast()
    
  const handleResetLink = (e) => {
    e.preventDefault()
    const emailid = e.target[0].value
    passwordResetService.passwordReset(emailid)
    .then(response => {
        toast.addToast(`Success: ${response.data.message}`,"success")
        console.log(response.data.message)
    }).catch(error => {
        toast.addToast(`Failed: ${error.response.data.error}`,"danger")
        console.log(error)
    })
  }
  return (
    <div>
      <div className="forgot-div">Forgot Password?
        <form onSubmit={handleResetLink}>
        <label htmlFor="email" style={{fontSize:"15px"}}>Email Id:</label>
        <input type="email" className="email_txt" style={{fontSize:"15px", marginLeft:"5px", marginBottom:"5px"}} placeholder="Enter Email Id" />
        <br />
        <button type="submit" className="btn btn-primary" style={{marginLeft:"5px", fontSize:"13px",marginBottom:"5px"}}><b>Submit</b></button>
        </form>
      </div>
      <ToastContainer position="top-center" theme="colored" className="p-3 text-align-center"/>
    </div>  
    )
}

export default ForgotPassowrd