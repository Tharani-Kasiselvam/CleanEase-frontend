import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import passwordResetService from '../services/passwordResetService';
import { useNavigate, useParams } from 'react-router-dom';

const AccountRecovery = () => {
    const params = useParams()
    const navigate = useNavigate()
    
    const userId = params.userId
    const tokenStr = params.tokenStr

    const handlePasswordReset = (e) => {
        const password = e.target[0].value

        e.preventDefault()
        passwordResetService.recoverPassword(userId, tokenStr, password)
            .then((response) => {
                toast.success(response.data.message)
                 e.target[0].value = ""
            }).catch(error => {
                toast.error(error.response.data.error)
            })
    }

  return (
    <div>
       <div className="recover-div">Account Recovery
            <form onSubmit={handlePasswordReset}>
                <label htmlFor="pwd" style={{fontSize:"15px"}}>Enter New Password</label>
                <input type="text" style={{fontSize:"15px", marginLeft:"5px", marginBottom:"5px"}} placeholder="Enter password"/>
                <button type="submit" className="btn btn-primary" style={{marginLeft:"5px", fontSize:"13px", marginBottom:"5px"}}><b>Reset Password</b></button>
                <button type="button" className="btn btn-info" style={{marginLeft:"5px", fontSize:"13px",marginBottom:"5px"}}
                onClick={()=>{navigate("/")}}>
                    <b>Goto Home</b></button>
            </form>
        </div>
        <ToastContainer position="top-center" theme="colored" className="p-3 text-align-center"/>
        </div>
  )
}

export default AccountRecovery