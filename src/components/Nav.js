import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({isNavActive,setIsNavActive}) => {

    // change this active-library in library.scss // Nav show and hide
    const activeNavHandle = () =>{
        setIsNavActive(!isNavActive)
    }

    return ( 
        <div className="nav">
            <h1>Waves</h1>
            <button onClick={activeNavHandle}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </div>
     );
}
 
export default Nav;