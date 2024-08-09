import { useContext } from 'react'
import { cleanServicesContext } from './ServicesProvider.jsx'

const CartsPage = () => {
    const {cart_service_list} = useContext(cleanServicesContext)
    
    console.log("Cart Data:",cart_service_list)

    let total_price = 0
    let price = 0
    const calcTotalPrice = () => {
        total_price = total_price 
        return (total_price)
    }
  return (
<div className="main">
    {/* iterating Carts data starts */}
    {cart_service_list.map(cartData => {
        price = cartData.price.split('₹')
        total_price = total_price + parseInt(price[1])
        return (
        <div className="row" id="cart-row">
        <div className="col-md-6" style={{ marginTop: "30px" }}>
          <img src={`../${cartData.img}`} alt={cartData.img} 
            style={{ height: "200px", width: "200px" }} />
        </div>
        <div className="col" id="cart-col" style={{ marginTop: "30px" }}>
        
          <h4>{cartData.service_name}</h4>
          Category:<h6>{cartData.category}</h6>
          Booked On: <h6>{cartData.date}</h6>
          Booked At:<h6>{cartData.time}</h6>
          <h6>Price:<p>{cartData.price}</p></h6>
          {/* <h6>Rating:</h6><p>{prod_details.rating}</p> */}
          {/* <p><small><b>Category: </b>{prod_details.category}</small></p> */}
        </div>
      </div>
    )
    })
    }
    <hr className="line" />
      <div className="row" id="tot-price"> 
        <div className="col" id="cart-col" ><h6>TOTAL PRICE:</h6></div>
        <div className="col" id="cart-col" style={{ textAlign: "right" }}><h6>₹{total_price}</h6></div>
      </div>
      <button className="btn btn-primary text-white" style={{ width: "180px", margin: "20px" }}><b>Proceed to Buy</b></button>
      <br /> <br />
    </div>  )
}

export default CartsPage