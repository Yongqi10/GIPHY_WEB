import React, { useState, useEffect, useRef, Fragment } from "react";
import "./ListOfGif.css";
function ListOfGif(typeOfSearch) {


  const flag = useRef(0);
  const current = flag.current;
  let searchInput = typeOfSearch.searchInput;
  let Search = "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=";

  switch (typeOfSearch.content) {
    case "Regular":
      Search =
        "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=";
      flag.current = 0;
      break;
    case "Trending":
      Search = "http://api.giphy.com/v1/gifs/trending?api_key=";
      flag.current = 0;
      break;
    case "Random":
      flag.current = 1;
      break;
    default:
      break;
  }


  if(typeOfSearch.content === 'Regular'){
    if(searchInput !== '')
    {
      searchInput.replace(' ','+')
      Search = "http://api.giphy.com/v1/gifs/search?q="+searchInput+"&api_key=";
      console.log(searchInput)
    }
  }

 

  const API = Search + process.env.REACT_APP_API_KEY + "&limit=15";
  const APIFromRandom = "http://api.giphy.com/v1/gifs/random?api_key="+process.env.REACT_APP_API_KEY + "&limit=15";

  const [gif, setGif] = useState(() => {
    return [];
  });
  const [Random, setRandom] = useState(() => {
    return [];
  });
  const [Loading, setLoading] = useState(() => {
    return true;
  });



  const GiphyAPI = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setGif(data.data);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };


  const RandomAIP = async () => {
    try {
      const response = await fetch(APIFromRandom);
      const data = await response.json()
      setRandom(data.data)
      setLoading(false)
    }
    catch(err){
      console.error(err)
    }
  }


  useEffect(() => {
    RandomAIP();
    GiphyAPI();
  }, [API]);


  if (current === 0) {
    return (
      <Fragment>
        {Loading === false ? (
          gif.map((item, index) => {
            return (
              <li className="m-1 list" key={item + index}>
                <img
                  className="border border-5 "
                  src={item.images.downsized_medium.url}
                  alt=""
                ></img>
              </li>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </Fragment>
    );
  } else {
    return current === 1 ? (
      Loading === false ? (
        <li className="m-1 list">
          <img
            className="border border-5 "
            src={Random.images.downsized_medium.url}
          ></img>
        </li>
      ) : (
        <p>Loading</p>
      )
    ) : null;
  }
}

export default ListOfGif;
