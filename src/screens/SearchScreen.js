import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';




const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');
    const [searchApi, errorMessage, results] = useResults();
    console.log(results);


    const filterResultsByPrice= (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }


    return (
        
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <SearchBar term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title="Big Spender"/>
            <ResultsList navigation={navigation} results={filterResultsByPrice('$$$$')} title="High Priced"/>
            </ScrollView>

        </View>
        
       
    )
}


const styles = StyleSheet.create({

})

export default SearchScreen;