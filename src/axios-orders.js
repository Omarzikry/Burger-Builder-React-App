import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-omar.firebaseio.com/'
});

export default instance;