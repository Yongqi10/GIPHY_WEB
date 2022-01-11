import React, { useState, useEffect } from 'react';



function GIPHYWEB() {

    const API = "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key="+ process.env.REACT_APP_API_KEY;
    
    const [gif,setGif] = useState(()=>{return []})




    const GiphyAPI = async () => {

        try {
            const response = await fetch(API);
            const data = await response.json()
            return data
        }
        catch(err)
        {
            console.error(err.message)
        }

    }

    useEffect (() =>{
        GiphyAPI().then(data => setGif(data))
    },[gif])
    return (<div>

    </div>);
}

export default GIPHYWEB;