import React, { useState, useEffect, cloneElement } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";



const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    };


    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null;
    }


    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: '600', textAlign: "center" }}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.images} source={{ uri: item }} />
                }}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    images: {
        width: 400,
        height: 160,
        marginTop: 10,
    }
})


export default ResultShowScreen;