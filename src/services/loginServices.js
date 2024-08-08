import { instance } from "./instance";

const loginServices = {
    login: async (email, password) => {
        return await instance.post('/login', {
            email,
            password
        })
    },

    logout: async () => {
        return await instance.post('/logout')
    }
    

}

export default loginServices