import React, {useState} from 'react';

function Searchpage() {
    const [searchTerm, setTerm]= useState('');
    function searchFunction (e) {e.preventDefault(); console.log (searchTerm) }


    return (
        <div>
            <p>Google Books Search</p>
            <p>Enter the searched item below:</p>
            <button onClick = {searchFunction}> Search Enumeration </button>
            <input onChange={e => {setTerm(e.target.value)}}></input>
             
            

    
        </div>
    )
}

export default Searchpage;
