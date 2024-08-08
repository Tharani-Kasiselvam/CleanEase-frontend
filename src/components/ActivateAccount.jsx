import { useParams, useNavigate } from "react-router"
import registerServices from '../services/registerServices';
import { useToast } from "./ToastContext";
import { useState } from "react";

const ActivateAccount = () => {
  console.log("Handling Activate Account Component")
  const [activationStatus, setActivationStatus] = useState("")

  const params = useParams()
  const toast = useToast()
  const navigate = useNavigate()

  let userId = params.userId
  let tokenStr = params.tokenStr

  const handleActivationStatus = () => {
    registerServices.activateAccount(userId, tokenStr)
      .then((response) => {
        console.log("Act msg:", response.data.message)
        setActivationStatus(response.data.message)
      }).catch(error => {
        console.log("Act error msg:", error)
        setActivationStatus(error.response.data.error)
      })
  }

  const ActivateWidget = () => {
    if (activationStatus != "") {
      return <div>
        <button className='btn btn-primary' id='activate-btn' onClick={handleActivationStatus}>Activate</button>
        <button className='btn btn-success' id='activate-btn' onClick={() => {navigate('/login')}}>Login</button>
        <button className='btn btn-warning' id='activate-btn' onClick={() => { navigate('/register')}}>Register</button>
      </div>
    } else {
      return <div>
        <button className='btn btn-primary' id='activate-btn' onClick={handleActivationStatus}>Activate</button>
      </div>
    }
  }

  return (
    <div>
      <div className="activate-div"><h2><b>Activate Account</b></h2>
        <h4>{activationStatus}</h4>
        <br />
        {ActivateWidget()}
      </div>
    </div>
  )
}

export default ActivateAccount