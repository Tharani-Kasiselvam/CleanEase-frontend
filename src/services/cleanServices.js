import { instance } from "./instance";

const cleanServices = {
    //get all the Services offered by CleanEase
    getAllServices: async() => {
        return await instance.get('/services')
    }
}

export default cleanServices