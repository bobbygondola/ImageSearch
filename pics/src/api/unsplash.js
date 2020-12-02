import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID ztoTzxhY0SrZXvT_Lyrf-Ctb1ES7vogdBImr0R2Esg0"
    }
})