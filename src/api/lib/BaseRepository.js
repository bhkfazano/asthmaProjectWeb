import axios from 'axios';

const ROOT_URL = `http://localhost:8080`;

export default class BaseRepository {

    async get(endpoint) {
        return await axios.get(`${ROOT_URL}${endpoint}`);
    }

    async post(endpoint, body) {
        return await axios.post(`${ROOT_URL}${endpoint}`, body);
    }

    async put(endpoint, body) {
        return await axios.put(`${ROOT_URL}${endpoint}`, body);
    }

    async delete(endpoint) {
        return await axios.delete(`${ROOT_URL}${endpoint}`);
    }
}
