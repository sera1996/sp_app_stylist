import axios from 'axios';
export const READ_EVENTS = 'READ_EVENTS';
const ROOT_URL = 'http://127.0.0.1:8000/api.stylist.v1/home/'
export const readEvents = () => async dispatch=>{ //asynchronously sends back a function
    const response = await axios.get(ROOT_URL); //axios is a http client. await assigns the
    //returned variable to a value
    //console.log('hi');
    dispatch({type:READ_EVENTS,response})
}