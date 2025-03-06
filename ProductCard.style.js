import {StyleSheet, Dimensions} from 'react-native'

const cardWith= (Dimensions.get('window').width)/2 -40

export default StyleSheet.create({
    container: {
        backgroundColor: '#d3d3d3',
        borderRadius:10,
        padding:10,
        margin:10,
        width: cardWith,
    },
    image: {
        height: 200,
        resizeMode: 'contain',
        borderRadius:10,

    },
    title: {
        fontSize:15,
        fontWeight:'bold',
    },
    price: {
        color: 'gray',
        fontSize:10,
        fontWeight: 'bold',
    },
    noStock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    }
})