import React, {Fragment,useState} from 'react';
import ListOfGif from './ListOfGif';
import './GIPHYWEB.css'


function GIPHYWEB() {

   const [search, setSearch] = useState(() => {return ""})
    
    const onClick = (e) => {
        
        setSearch(()=> e.target.value);
    }

    return (
        <Fragment>
            <nav className='width d-flex justify-content-start'>
            <input className='form-control ' type="text"></input>
            <button className='btn btn-primary' value="Regular" onClick={onClick}>Regular</button>
            <button className='btn btn-secondary' value="Trending" onClick={onClick}>Trending</button>
            <button className='btn btn-danger' value = "Random" onClick={onClick}>Random</button>
            </nav>
            <div className='item'>
            <ul className = "ullist">
                <ListOfGif content = {search}/>
            </ul>
            </div>
        </Fragment>
    );
}

export default GIPHYWEB;