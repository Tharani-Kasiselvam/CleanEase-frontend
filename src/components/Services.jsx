import { useLoaderData, useParams } from "react-router-dom";
import cleanServices from '../services/cleanServices.js'
import { FaRegHandPointRight } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom"
import { createContext, useState } from "react"
import Service_Details from "./Service_Details.jsx";
import '../App.css'
import Location from "./Location.jsx";
import { useNavigate } from 'react-router-dom'

export const CleanServicesContext = createContext()

export const loader = async () => {
    console.log("Inside Loader")
    const allServices = await cleanServices.getAllServices()
    return { allServices };
}

const Services = () => {
    const [selserviceName, setSelServiceName] = useState("All")
    const [serviceId, setServiceId] = useState("All")
    const [selectedServiceCategory, setSelectedServiceCategory] = useState("")

    const { allServices } = useLoaderData();
    // const {id} = useParams()
    const navigate = useNavigate()


    const services_list = allServices.data.services_list
    console.log(services_list)

    let i = 0
    let dist_serv = []

    const price_load = (price, ofr_price) => {
        if (ofr_price == "") {
            return <b>{price}</b>
        }
        else {
            return (
                <div>
                    <div style={{ textDecoration: "line-through" }}>{price}</div><div><b>{ofr_price}</b></div>
                </div>
            )
        }
    }


    const onNavLinkClick = (e) => {
        console.log(e)
        setSelServiceName(e.target.innerText)
    }

    const ServiceInfo = (selectedServiceCategory) => {
        { console.log("inside ServiceInfo", selectedServiceCategory) }
        { navigate("/category") }
        <Service_Details selectedServiceCategory={selectedServiceCategory} />
    }

    return (
        <div>
            <CleanServicesContext.Provider value={{ services_list }}>
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
                                {services_list.map((service, index) => {
                                    if ((selserviceName == service.service_name) || selserviceName == "All") {
                                        return (
                                            <div className="card" key={index}>
                                                <div className="row">
                                                    <div className="col" style={{ width: "100px" }}>
                                                        <img
                                                            src={`../${service.img}`}
                                                            alt={service.img}
                                                            className="card-img-top"
                                                            style={{ width: "120px", height: "100px" }} />
                                                        <div><button className="add-serv-btn">ADD</button></div><br />
                                                        <button className="srv-dtl-btn" onClick={() => ServiceInfo(service, service.category)}>
                                                            Service Details <FaRegHandPointRight size={25} style={{ paddingBottom: "6px" }} />

                                                        </button>
                                                    </div>
                                                    <div className="col" style={{ marginLeft: "-20px" }}>
                                                        <div className="card-body">
                                                            <h6 className="card-title"><b>{service.service_name}</b></h6>
                                                            {/* <br /> */}
                                                            <h5 className="card-text">{service.category}</h5>
                                                            <div className="card-text">{price_load(service.price, service.offer_price)}</div>
                                                            <br />
                                                            <div className="card-text"><b>Location :</b> <Location locationList={service.location} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                                }
                            </div>
                        </div>
                    </div>
                    {/* </div>
                </div> */}
                    {/* </div> */}
                </div>
                <Outlet />

            </CleanServicesContext.Provider>
        </div>
    )
}

export default Services