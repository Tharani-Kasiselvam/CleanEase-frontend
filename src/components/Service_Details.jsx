import { useContext, useState } from "react"
import { cleanServicesContext } from './ServicesProvider.jsx'
import { TfiTimer } from "react-icons/tfi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from "react-redux";
import { add, minus, reset, selectCartCount } from '../features/cartCounterSlice'
import { Link } from "react-router-dom";

const Service_Details = () => {
    // const { productCategory,buttonTxt,setButtonTxt } = useContext(cleanServicesContext)
    const { productCategory,addCartServiceList,cart_service_list} = useContext(cleanServicesContext)

    const currentDate = new Date();

    const [buttonTxt,updateBtnTxt] = useState("ADD")


    const pickDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)
    const [serviceDate, setServiceDate] = useState(pickDate)
    const [selectedTime, setSelectedTime] = useState("")
    // const [cartDataFlag, setCartDataFlag] = useState(false)

    console.log("#verify Cart data###:",cart_service_list)
    // const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();
    let final_price = 0

    const loadCartCount = () => {
        console.log("#alterText:",alterText)
        if(buttonTxt=="ADD" && !alterText){
         updateBtnTxt("REMOVE");
         dispatch(add(1))
         const id = productCategory._id
         const img = productCategory.img
         const service_name = productCategory.service_name
         const category = productCategory.category
         const price = final_price
         const date = serviceDate
         const time = selectedTime
         
        const loadCartItems = {
            id,
            img,
            service_name,
            category,
            price,
            date,
            time
            }
        
        addCartServiceList(loadCartItems)
        cartDataFlag = false
        alterText = true
        }

        else{
            updateBtnTxt("ADD")
            dispatch(minus(1))    
        }
    }

  

    let i = 0;
    let incl_index =0;
    let excl_index = 0;

    const price_load = (price, ofr_price) => {
        if (ofr_price == "") {
            final_price = price
            return <h5 style={{ color: "#004D97" }}>{price}</h5>
        }
        else {
            final_price = ofr_price
            return (
                <div>
                    <div><h5 style={{ color: "#004D97" }}>{ofr_price}</h5></div>
                    <div style={{ textDecoration: "line-through" }}>{price}</div>
                </div>
            )
        }
    }

    const handleServiceDateChange = (date) => {
        // console.log("Selected Service Date ---", date.toDateString())
                setServiceDate(date.toDateString())

    }

    const onTimeSelectChange = (event) => {
        // console.log(event.target.value)
        setSelectedTime(event.target.value)
    }

    let cartDataFlag = false
    let alterText = false

    const verifyCartData = (service_id) => {
        console.log("#Inside verifyCartData function")
        cart_service_list.map(cartData=>{
            console.log(cartData.id," $$$$ ",service_id)
            if(cartData.id==service_id){
                console.log("matching")
                cartDataFlag = true
            }
        })
    }

    const validateBtnTxt = () => {
        console.log("#Inside validateBtnTxt--cartDataFlag:",cartDataFlag)
        if(!cartDataFlag){
            return <button className="add-serv-btn" onClick={loadCartCount}>{buttonTxt}</button>
        }
        else
        {
            cartDataFlag=true
            alterText = true
            return <button className="add-serv-btn" onClick={loadCartCount}>REMOVE</button>
        }
    }

return (
    <div>
        <div className="container-fluid"><Link to='/services' className="go-back">Go Back</Link>
            <div className="row">
                <div className="col-md-5">
                    {console.log("#Service_Id:",productCategory._id)}
                    {verifyCartData(productCategory._id)}
                    
                    <img src={`../${productCategory.img}`} alt={productCategory.img} width={400} height={300}/>

                </div>

                <div className="col-md-7" id="common-txt">
                    <h3>{productCategory.service_name}&nbsp;{productCategory.category}</h3>
                    <br />
                    {price_load(productCategory.price, productCategory.offer_price)}
                    <p><TfiTimer /> : <b>{productCategory.duration}</b></p>
                    <p>Pick a Date:</p>
                    <DatePicker
                        selected={serviceDate}
                        onChange={handleServiceDateChange}
                        minDate={pickDate}
                        // excludeDates={new Date(currentDate)}
                    />
                    {/* <input type="date" id="myDate" onfocus={disablePastDates()} /> */}
                    <br />
                    <br />
                    <div><p>Available Time Slots:</p>
                        <select id="timeslot" className="All" onChange={onTimeSelectChange}>
                            {/* {console.log("Time SLOTS:", productCategory.available_time)} */}
                            {productCategory.available_time.map(time => {
                                return (
                                    <option value={time} key={i++}>{time}</option>
                                )
                            }
                            )
                            }
                        </select>
                        <br />
                        <br />
                        <div>
                            {validateBtnTxt()}
                        </div>
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