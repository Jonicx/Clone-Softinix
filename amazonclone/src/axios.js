import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-challenge-dcf54/us-central1/api'// this where we put the cloud API (cloud function)
});

export default instance;