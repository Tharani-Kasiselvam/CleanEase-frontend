import { instance } from './instance';


// define the register services
const registerServices = {
    // register a new user
    register: async (firstname,lastname, email, password) => {
        // make a POST request to the register endpoint
        return await instance.post('/register', {
            firstname,
            lastname,
            email,
            password
        })
    },

    activateAccount: async (userId, tokenStr) => {
        // make a POST request to Activate the Account
        return await instance.post(`/activateAccount/${userId}/${tokenStr}`)
    }
}

// export the register services
export default registerServices;