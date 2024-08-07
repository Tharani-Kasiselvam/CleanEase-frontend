import { instance } from "./instance";

const passwordResetService = {

    //Token Generation
    passwordReset : async (email) => {
        //Post request to the password reset entrypoint
        return await instance.post('/forgotpwd',{email})
    },

    recoverPassword : async (userId, tokenStr, password) => {
        //Post request to update new password
        return await instance.post(`/password-reset/${userId}/${tokenStr}`,{password})
    }

}

export default passwordResetService