import React from 'react'
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TextInput, FlatList } from 'react-native'

import product_data from './products_data.json';

import ProductCard from './components/ProductCard/ProductCard';

function App(){
    const renderProduct=({item}) => <ProductCard product={item} />
    return (
        <SafeAreaView style= {styles.container}>
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Ara..."
                placeholderTextColor="#888"/>

            <FlatList
                data={product_data}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />

        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        margin:20,
    },
    title: {
        fontSize: 40,
        color: 'purple',
        fontWeight: 'bold',
    },
    searchBar: {
        backgroundColor: '#d3d3d3',
        padding:10,
        borderRadius: 10,
        margin: 10,
    }
})

export default App