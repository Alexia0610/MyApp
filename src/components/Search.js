import axios from 'axios';
import React, { useState } from 'react';
import Results from './Results';



const Search = () => {
    //return <h2>Search</h2>;
    const [searchInput, setSearchInput] = useState('');
    const [ repos, setRepos ] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const axios = require('axios');
    const handleClick = async () => {
        console.log(searchInput);

        try {
            const result = await axios('https://api.github.com/users/${searchInput}');

            setRepos(result);
        } catch(err) {
            console.log(err);
        }
    };

    
    return (
        <>
         <div style={{ padding: "20px" }}>
          <h1>Repo Search</h1>
         <input type="text" placeholder="search" value={searchInput} onChange={handleChange} />
         <button onClick={handleClick}>Search</button>
    
         </div>
         <Results repos={repos}/>
         </>
    )
}

export default Search;
