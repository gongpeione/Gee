import axios from 'axios';

export default axios.create({
    timeout: 10000,
    withCredentials: false, // default
    responseType: 'json', // default
    maxRedirects: 5, // default
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },
});