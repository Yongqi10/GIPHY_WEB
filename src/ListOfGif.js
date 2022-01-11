import React, { useState, useEffect } from 'react';

function ListOfGif() {

    const API = "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key="+ process.env.REACT_APP_API_KEY;

    const [gif,setGif] = useState(()=>{return []})
    const [Loading,setLoading] = useState(() => {return true})
    const GiphyAPI = async () => {
        try {
            const response = await fetch(API)
            const data = await response.json()
            setGif(data.data)
            setLoading(false)

        }
        catch(err)
        {
            console.error(err.message)
        }

    }
    useEffect (() =>{  
        GiphyAPI()
        
    },[])

    console.log(gif)
    return (<li>
        {
           Loading === false?  <img src={gif[0].images.downsized_medium.url}></img>: <p>Loading</p>
        }
        
    </li>);
}

export default ListOfGif;