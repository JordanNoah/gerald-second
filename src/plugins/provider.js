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
    },
    //degress
    getDegress: async () => {
        return await axios.get(`/degrees`)
    },
    //subject
    getSubjects: async (degree) => {
        const params = {
            filters: {
              degree: degree
            }
          };
        return await axios.get(`/subjects`,{params:params})
    },
    getTeachers: async (teacher) => {
        const params = {
            filters:{
                full_name:teacher
            }
        }
        console.log(params);
        return await axios.get(`/professors`,{params:params})
    }
}

export default provider