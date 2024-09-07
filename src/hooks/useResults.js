import React,{ useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');
    
    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit:50,
                    term : searchTerm,
                    location: 'New York'
                }
            });
            setResults(response.data.businesses);
        } catch(error) {
            setErrorMessage('Something went wrong! Please try again');
        }
    };

    //Call searchApi when the component is first rendered
    // searchApi('cake'); BAD CODE!

    useEffect(() => {
        searchApi('cake');
    }, []);

    return [searchApi, results, errorMessage]
};
