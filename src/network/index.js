// import axios from 'axios';

console.log('api preffix', API);
const baseURL =  'http://119.23.41.124:8102';
const instance = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json',
    validateStatus: function (status) {
        return status >= 200 && status < 500;
    }
});

export default {
    get (obj) {
        return Promise.resolve(
            instance.get(obj.url,obj.data || {})
        )
    },

    post (obj) {
        return Promise.resolve(
            instance.post(obj.url,obj.data || {})
        )
    },

    delete (obj) {
        return Promise.resolve(
            instance.delete(obj.url,{
                data: obj.data ? obj.data : {}
            })
        )
    },

    put (obj) {
        return Promise.resolve(
            instance.put(obj.url,obj.data || {})
        )
    },

    patch(obj){
        return Promise.resolve(
            instance.patch(obj.url,{
                data: obj.data ? obj.data : {}
            })
        )
    },
    instance: instance
};
