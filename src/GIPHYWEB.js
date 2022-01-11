import React, {Fragment} from 'react';
import ListOfGif from './ListOfGif';
import './GIPHYWEB.css'

function GIPHYWEB() {



    return (
        <Fragment>
            <input className='form-control width' type="text"></input>
            <ul className = 'width'>
                <ListOfGif />
            </ul>
        </Fragment>
    );
}

export default GIPHYWEB;