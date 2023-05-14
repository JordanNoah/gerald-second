import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const provider = {
    setToken: (token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    removeToken: () => {
        delete axios.defaults.headers.common.Authorization
    },
    signin: async (body) => {
        return await axios.post(`/auth/sign-in`,body)
    },
    signout: async () => {
        return await axios.delete(`/auth/sign-out`)
    },
    //students routes
    getStudents: async () => {
        return await axios.get(`/students`)
    },
    postStudent: async (body) => {
        return await axios.post(`/students`,body)
    }
}

export default provider