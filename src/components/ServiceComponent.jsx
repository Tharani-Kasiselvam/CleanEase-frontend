import { useContext, useState } from "react";
import {cleanServicesContext} from './ServicesProvider.jsx'
import Location from './Location'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { add, minus, reset, selectCartCount } from '../features/cartCounterSlice'
import { FaRegHandPointRight } from "react-icons/fa";

const ServiceComponent = ({ service }) => {
    // const {updateServiceCategory,productCategory, buttonTxt,setButtonTxt} = useContext(cleanServicesContext)
    const {updateServiceCategory} = useContext(cleanServicesContext)

    const [selserviceName, setSelServiceName] = useState("All")
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // const [buttonTxt,updateBtnTxt] = useState("ADD")


    let addBtn = 0

    const loadServiceDetails = (service) => {
        navigate("/services/category")
        updateServiceCategory(service)
    }

    // const loadCartCount = () => {
    //     if(buttonTxt=="ADD"){
    //      updateBtnTxt("REMOVE");
    //      dispatch(add(1))
    //     }
    //     else{
    //         updateBtnTxt("ADD")
    //         dispatch(minus(1))   
    //      }
    // }
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

    return (
        <div className="row">
            <div className="col" style={{ width: "100px" }}>
                <img
                    src={`../${service.img}`}
                    alt={service.img}
                    className="card-img-top"
                    style={{ width: "120px", height: "100px" }} />
                {/* <div><button className="add-serv-btn" id="add-btn" key={addBtn++} onClick={loadCartCount}>{buttonTxt}</button></div> */}
                <br />
                <button className="srv-dtl-btn"
                    onClick={() => loadServiceDetails(service)}
                >
                    {/* onClick={() => ServiceInfo(service, service.category)} */}
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
    )
}

export default ServiceComponent