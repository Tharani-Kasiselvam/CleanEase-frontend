import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 offset-md-3" style={{marginLeft:"-25px"}}>
              <div className="card" style={{width:"95%"}}>
                <div className="card-header" id="home-hdr">
                  Home
                </div>
                <div className="card-body" id="home_cont">
                  <h1>Tell us what you need. We’ll handle the rest.</h1> <br/>
                  <p>&emsp;&emsp;&emsp;We offer a range of impeccable cleaning services, with a solid team of highly trained staff members.<br/>
                  &emsp;&emsp;&emsp;We are an environmentally conscious cleaning company serving for your home needs.</p>
                <img src="./home_theme.png" alt="ce_theme" style={{width:"90%"}}/>
              <br />
              <br />
              <div className="row">
              <div className="col-md-4" style={{padding:"20px"}}>
              <MdOutlineSupportAgent size={35}/> +91-8969325123
              <br/>
              <HiOutlineMailOpen size={35}/> cleanease.org.com
              </div>
              <div className="col-md-4" style={{padding:"20px", marginTop:"10px"}}>
                <div className="home-icons">
              <FaFacebook />
              <FaInstagramSquare />
              <FaLinkedin />
              </div>
              </div>
              <div className="col-md-4">
              <img src="./home_img.png" alt="ce_img" style={{width:"25%", marginBottom:"50px"}}/>
              </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Home