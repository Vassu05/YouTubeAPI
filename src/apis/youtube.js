import axios from "axios";
const KEY = 'AIzaSyBULtyY3_q1pIt4G5ieu5yWyTGk6pdYcI0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});