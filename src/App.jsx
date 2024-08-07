import {Routes, Route} from 'react-router-dom'
import HomeNav from "./wrappers/HomeNav"
import Home from "./components/Home"
import { loader as servicesLoader } from "./components/ServicesProvider";
import Service_Details from "./components/Service_Details";
import LoadAllSevices from "./components/LoadAllSevices";
import Register from "./components/Register"
import Login from "./components/Login"
import ForgotPassowrd from "./components/ForgotPassowrd"
import AccountRecovery from "./components/AccountRecovery"
import ActivateAccount from "./components/ActivateAccount"

const App = () => {
  return(
    <>
<HomeNav />
<Routes>
<Route path = "/" element = {<Home />} />
<Route path = "/register" element = {<Register />} />
<Route path = "/login" element = {<Login />} />
<Route path = "/forgotpwd" element = {<ForgotPassowrd />} />
<Route path = "/password-reset/:userId/:tokenStr" element = {<AccountRecovery />} />
<Route path = "/activateAccount/:userId/:tokenStr" element = {<ActivateAccount  />} />
<Route path = "/services" element = {<LoadAllSevices />} />
<Route path = "/services/:id" element = {<LoadAllSevices />} loader = {servicesLoader} />
<Route path = "/services/category" element = {<Service_Details />} loader = {servicesLoader} />
</Routes>

  </>
)
}

export default App