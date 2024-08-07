// import { FaRegHandPointRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"
// import Location from "./Location.jsx";
import { createContext, useContext, useState } from "react";
import {cleanServicesContext} from './ServicesProvider.jsx'
import { useDispatch } from "react-redux";
import { add, minus, reset, selectCartCount } from '../features/cartCounterSlice'
import ServiceComponent from "./ServiceComponent.jsx";

const LoadAllSevices = () => {
    const {services_list, updateServiceCategory,productCategory, buttonTxt,setButtonTxt} = useContext(cleanServicesContext)
    const [selserviceName, setSelServiceName] = useState("All")

    let buttonVal = "ADD"

    // const dispatch = useDispatch();
    let i = 0
    // let addBtn = 0
    let dist_serv = []

    // const loadCartCount = (e) => {
    //     console.log("INside loadCARTcount -- btnTxt",buttonTxt)
    //     if(buttonTxt=="ADD"){
    //         setButtonTxt("REMOVE")
    //         dispatch(add(1))
    //     }
    //     if(buttonTxt=="REMOVE"){
    //         setButtonTxt("ADD")
    //         dispatch(minus(1))
    //     }
    // }

    console.log("Inside LoadAllServices-check serv list",services_list)

    // let productData = getProductCategory()
    console.log("type verify",typeof productCategory)

    // const navigate = useNavigate()

    // const price_load = (price, ofr_price) => {
    //     if (ofr_price == "") {
    //         return <b>{price}</b>
    //     }
    //     else {
    //         return (
    //             <div>
    //                 <div style={{ textDecoration: "line-through" }}>{price}</div><div><b>{ofr_price}</b></div>
    //             </div>
    //         )
    //     }
    // }

    const onNavLinkClick = (e) => {
        console.log(e)
        setSelServiceName(e.target.innerText)
    }

    // const loadServiceDetails = (service) => {
    //     navigate("/services/category")
    //     updateServiceCategory(service)
    // }

  return (
    <div>
        <div className="container-fluid">
                <div className="row">
                    <div className="col" style={{ maxWidth: "350px", backgroundColor: "white" }}>
                        {/* Start - SideBar contents to list the Cleaning Services */}
                        <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "280px", borderRadius: "5px", backgroundImage: "linear-gradient(#a6f2dfe1,#8abcee,#8debeb)" }}>
                            <ul className="navbar-nav nav-pills flex-column mb-auto" id="nav-all">
                                {/* Iterating all the Service List to get the distict Services and its Title for routing */}
                                
                                {services_list.map(data => {
                                    let serviceName = data.service_name
                                    let servId = data.title
                                    if (!dist_serv.includes(serviceName)) {
                                        dist_serv.push(serviceName)
                                        return (
                                            <li className="nav-item" key={i++}>
                                                <NavLink
                                                    to={`/services/${servId}`}
                                                    className="nav-link"
                                                    style={{ color: "brown", fontWeight: "bold" }}
                                                    onClick={onNavLinkClick}>
                                                    {serviceName}
                                                </NavLink>
                                            </li>
                                        )
                                    }
                                })
                                }
                            </ul>
                        </div>
                        {/* End - SideBar contents to list the Cleaning Services */}

                    </div>

                    <div className="col" style={{ marginLeft: "-50px" }}>
                        <div className="card-deck">
                            {/* Iterating the list of services and storing it into Cards based on the Cleaning Service selection */}
                            {console.log("value of productCategory:",productCategory)}
                            {services_list.map((service, index) => {
                                if ((selserviceName == service.service_name) || selserviceName == "All") {
                                    return (
                                        <div className="card" key={index}>
                                            <ServiceComponent service = {service}/>
                                        </div>
                                    )
                                }
                            })
                            }
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default LoadAllSevices