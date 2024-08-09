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
    const [cart_service_list,setCart_service_list] = useState([])
    // const [buttonTxt,setButtonTxt] = useState("ADD")

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

    const addCartServiceList = (loadCartItems) => {
        console.log(">>>",loadCartItems)
        setCart_service_list([...cart_service_list, loadCartItems])
    }

    const rmvIdFromCartServiceList = (rmvId) => {
        console.log(rmvId)
        const cart_afterDelId =  cart_service_list.filter(cartData => cartData.id !=rmvId)
        setCart_service_list(cart_afterDelId)
    }

    return (
        <div>
            <cleanServicesContext.Provider value = {{services_list,updateServiceCategory,productCategory,
                cart_service_list, addCartServiceList, rmvIdFromCartServiceList
            }}>
            {children}
            {/* <Outlet /> */}
            </cleanServicesContext.Provider>
        </div>
    )
}

export default ServicesProvider