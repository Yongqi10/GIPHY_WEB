import React, { useState, useEffect,Fragment } from 'react';
import "./ListOfGif.css"
function ListOfGif(typeOfSearch) {

  //  const [flag, setFlag] = useState(()=>{return 0})
    let Search = ""
    console.log(typeOfSearch.content);
    switch(typeOfSearch.content){

        case'Regular':
            Search = "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=";
            console.log("Regular");
          //  setFlag(0);
            break;
        case'Trending':
            Search = "http://api.giphy.com/v1/gifs/trending?api_key=";
            console.log("Trending");
           // setFlag(0);
            break;
        case 'Random':
            Search = "http://api.giphy.com/v1/gifs/random?api_key=";
            console.log("Random");
            //setFlag(1);
            break;
        default:
            break;
    }

    const API = Search + process.env.REACT_APP_API_KEY+ "&limit=15";


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
        
    },[API])




    console.log(gif)

    if(typeof(gif) === 'object')
    {
        return (
            <Fragment>
            {
                
               (Loading === false)?
               gif.map((item,index)=>{
                return    <li className='m-1 list' key={item+index} > <img className='border border-5 ' src={item.images.downsized_medium.url} alt= ""></img></li>
               })  
               : 
               <p>Loading</p>
            }
            </Fragment>
        );
    }
    else {
        return(

            (Loading === false)?
             <li className='m-1 list'> <img className='border border-5 ' src={gif.images.downsized_medium.url}></img></li>
            : 
            <p>Loading</p>
            
        )
        
    }


}

export default ListOfGif;