import { useContext } from "react"
import { useNavigate } from "react-router-dom"


const Service_Details = () => {
    const navigate = useNavigate()
  return (
  <div>
     {/* {navigate("/category")} */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h1>Image</h1>
                    {/* <img src={selectedServiceCategory.img} alt={selectedServiceCategory.img} /> */}
                    
                </div>

                <div className="col-md-6">
                    <h1>Service info</h1>
                </div>

            </div>

            <div className="row">
                <div className="col">
                    <h1>Inclusions & Exclusions</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service_Details