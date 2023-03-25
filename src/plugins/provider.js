import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const provider = {
    setToken: (token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    removeToken: () => {
        axios.defaults.headers.common.Authorization = ''
    },
    signin: async (body) => {
        return await axios.post(`/auth/sign-in`,body)
    }
}

export default provider