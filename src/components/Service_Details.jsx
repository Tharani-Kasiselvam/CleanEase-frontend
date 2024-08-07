import { useContext, useState } from "react"
import { cleanServicesContext } from './ServicesProvider.jsx'
import { TfiTimer } from "react-icons/tfi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from "react-redux";
import { add, minus, reset, selectCartCount } from '../features/cartCounterSlice'

const Service_Details = () => {
    const { productCategory,buttonTxt,setButtonTxt } = useContext(cleanServicesContext)
    const currentDate = new Date();

    const pickDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)
    const [serviceDate, setServiceDate] = useState(pickDate)

    // const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const loadCartCount = () => {
        if(buttonTxt=="ADD"){
        setButtonTxt("REMOVE")
            dispatch(add(1))
        }
        else{
            setButtonTxt("ADD")
            dispatch(minus(1))
        }
    }
  

    let i = 0;
    let incl_index =0;
    let excl_index = 0;

    const price_load = (price, ofr_price) => {
        if (ofr_price == "") {
            return <h5 style={{ color: "#004D97" }}>{price}</h5>
        }
        else {
            return (
                <div>
                    <div><h5 style={{ color: "#004D97" }}>{ofr_price}</h5></div>
                    <div style={{ textDecoration: "line-through" }}>{price}</div>
                </div>
            )
        }
    }

    const handleServiceDateChange = (date) => {
        console.log("Selected Service Date ---", serviceDate, "&&&",date )
        setServiceDate(date)
    }

    const onTimeSelectChange = () => {

    }

return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                    <img src={`../${productCategory.img}`} alt={productCategory.img} width={400} height={300}/>

                </div>

                <div className="col-md-7">
                    <h3>{productCategory.service_name}&nbsp;{productCategory.category}</h3>
                    <br />
                    {price_load(productCategory.price, productCategory.offer_price)}
                    <br />
                    <p><TfiTimer /> : {productCategory.duration}</p>
                    Pick a Date:
                    <DatePicker
                        selected={serviceDate}
                        onChange={handleServiceDateChange}
                        minDate={pickDate}
                        // excludeDates={new Date(currentDate)}
                    />
                    {/* <input type="date" id="myDate" onfocus={disablePastDates()} /> */}
                    <br />
                    <br />
                    <div>Available Time Slots:
                        <select id="timeslot" className="All" onChange={onTimeSelectChange}>
                            {console.log("Time SLOTS:", productCategory.available_time)}
                            {productCategory.available_time.map(time => {
                                return (
                                    <option value={time} key={i++}>{time}</option>
                                )
                            }
                            )
                            }
                        </select>
                        <br />
                        <div><button className="btn btn-info" onClick={loadCartCount}>{buttonTxt}</button></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <h1>Inclusions</h1>
                    {/* {console.log(productCategory.inclusions)} */}
                    {productCategory.inclusions.map(inclData => {
                        // console.log(inclData)
                        return (
                            <p key={incl_index++}>✔ {inclData}</p>
                        )
                    })}
                    <hr />
                    <div>
                        <h1>Exclusions</h1>
                        {productCategory.exclusions.map(exclData => {
                            // console.log(exclData)
                            return (
                                <p key={excl_index++}>✘ {exclData}</p>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    </div>
)
}

export default Service_Details