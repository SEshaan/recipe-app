
import React,{ useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                <ResultList results={results}/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
