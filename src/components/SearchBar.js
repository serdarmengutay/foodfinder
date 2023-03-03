import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'



const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Search'
            selectionColor={'black'}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        marginHorizontal: 15,
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
    
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;