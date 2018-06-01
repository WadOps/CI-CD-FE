import axios from 'axios';

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // baseURL = 'http://localhost:1337'
    baseURL = 'http://app-sails:1337'
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://backend.tech.sdrm.me:7331'
}

export default {
    customApi(method, url) {
        return axios.create({
            baseURL: baseURL
        })[method](url)
    },

    customApiParam(method, url, obj) {
        return axios.create({
            baseURL: baseURL
        })[method](url, obj)
    }
}