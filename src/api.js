import axios from 'axios'


export const searchPhotos = async (term) =>{
    const apiURL = process.env.REACT_APP_API_URL;
    const clientID  = process.env.REACT_APP_CLIENT_ID;
    const photos = await axios.get(`${apiURL}/photos`, {
         headers: {
             Authorization: `Client-ID ${clientID}`,
         },
         params: {
             query: term
         }
     })
     return photos.data;
 };

 export const getAllPhotos = async () =>{
    const apiURL = process.env.REACT_APP_API_URL;
    const url = `${apiURL}/photos`;
    const clientID  = process.env.REACT_APP_CLIENT_ID;
    const photos = await axios.get(url, {
         headers: {
            Authorization: `Client-ID ${clientID}`,
         },
        
     })
     console.log(photos.data);
 }

 export const getPhoto = async (id) =>{
    const apiURL = process.env.REACT_APP_API_URL;
    const clientID  = process.env.REACT_APP_Client_ID;
    const photo = await axios.get(`${apiURL}/photos`, {
         headers: {
            Authorization: `Client-ID ${clientID}`,
         }
         
     })
     console.log(photo)
 }

