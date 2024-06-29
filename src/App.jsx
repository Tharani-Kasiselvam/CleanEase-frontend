import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeNav from "./wrappers/HomeNav"
import Home from "./components/Home"
import Services, { loader as servicesLoader } from "./components/Services";
import Service_Details from "./components/Service_Details";


const App = () => {
  
const router = createBrowserRouter([
  {
  path : "/",
  element : <HomeNav />,
  children : [
    {
      path : "home",
      element : <Home />
    },
    {
      path : "services",
      element : <Services />,
      loader: servicesLoader,
    },
    {
      path : "services/:id",
      element : <Services />,
      loader: servicesLoader,
    },
    {
      path : "category",
      element : <Service_Details />
    }
  ]
  }
])
  return <RouterProvider router={router} />

}

export default App