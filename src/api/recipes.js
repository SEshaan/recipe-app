import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.edamam.com/api/recipes/v2/',
    
});