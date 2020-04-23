import React, {useState} from 'react';
import axios from 'axios'; 
function Searchpage() {
    const [searchTerm, setTerm]= useState('');
    function searchFunction (e) {e.preventDefault(); console.log (searchTerm) }
 const searchBooks = term => {
     return axios.get("https://www.googleapis.com/books/v1/volumes", {
         params:{
             q: term
         }
     })
 }

 function handleSubmit( event ) {
     event.preventDefault()
     searchBooks(searchTerm)
     .then (  //async portion
         (
             {
                 data: {items: booklist}
             }
         ) => {
            console.log()

         }
     )

 }

    return (
        <div>
            <p>Google Books Search</p>
            <p>Enter the searched item below:</p>
            <button onClick = {handleSubmit}> Search Enumeration </button>
            <input onChange={e => {setTerm(e.target.value)}}></input>
             
            

    
        </div>
    )
}

export default Searchpage;
