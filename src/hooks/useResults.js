
import React, { useState, useEffect } from 'react';
import recipes from '../api/recipes'; 

export default (term) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await recipes.get('', {
                params: {
                    "type": "public",
                    "app_id": "272b6d72",
                    "app_key": "8f8003004dc9c488fadac915ca9ee2c4",
                    q: searchTerm,
                    from: 0,
                    to: 50,
                }
            });
            setResults(response.data.hits); 
        } catch (error) {
            console.error("API request error: ", error.response ? error.response.data : error.message);
            setErrorMessage("Something went wrong! Please try again.");
        }
    };

    useEffect(() => {
        if (term){            
            searchApi(term);
        }else{
        searchApi('cake');
        }
    }, []);


    return [searchApi, results, errorMessage];
};
