import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f1acd4559d57d22506f42f55505f2fe7251d984b48382c3f3c44ba25757cdc6a' 
    }
});