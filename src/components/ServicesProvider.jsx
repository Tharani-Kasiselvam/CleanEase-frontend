// import { useLoaderData, useParams } from "react-router-dom";
import cleanServices from '../services/cleanServices.js'
import { createContext, useEffect, useState } from "react"
import '../App.css'

export const cleanServicesContext = createContext()

export async function loader(){
    console.log("Inside Loader")
    const allServices = await cleanServices.getAllServices()
    return { allServices };
}


const ServicesProvider = ({children}) => {
    const [productCategory, setProductCategory] = useState([{}])
    const [services_list, setServices_list] = useState()
    const [buttonTxt,setButtonTxt] = useState("ADD")

    // const { allServices } = useLoaderData();
    // const navigate = useNavigate()


    useEffect(()=>{
        loader().then((res)=>{
            console.log("******USEEFFECT--Loader func",res)
            console.log("SERVICES LIST:",res.allServices.data.services_list)
            setServices_list(res.allServices.data.services_list)
        })
    },[])


    // const services_list = allServices.data.services_list
    // console.log(services_list)


    const updateServiceCategory = (selServCat) => {
        console.log("inside updateServiceCategory", selServCat);
        console.log("testing the category", selServCat.exclusions);
        // console.log(selServCat[0])
        setProductCategory(selServCat)
        // navigate("/services/category")
    }

    const getProductCategory = () => {
        return {productCategory}
    }

    return (
        <div>
            <cleanServicesContext.Provider value = {{services_list,updateServiceCategory,productCategory,
                buttonTxt, setButtonTxt
            }}>
            {children}
            {/* <Outlet /> */}
            </cleanServicesContext.Provider>
        </div>
    )
}

export default ServicesProvider