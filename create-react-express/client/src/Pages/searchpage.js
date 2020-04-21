import React, {useState} from 'react';

function Searchpage() {
    const [searchTerm, setTerm]= useState('');
    function searchFunction (e) {e.preventDefault(); console.log (searchTerm) }


    return (
        <div>
            <p>Hello World</p>
            <button onClick = {searchFunction}> Search Books </button>
            <input onChange={e => {setTerm(e.target.value)}}></input>

            

    
        </div>
    )
}

export default Searchpage;
