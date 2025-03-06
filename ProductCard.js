import React from 'react'
import {View, Image, Text} from 'react-native'

import styles from './ProductCard.style'

const ProductCard = ({product}) => {
    return (
        <View style= {styles.container}>
            <Image 
                style= {styles.image}
                source={{uri:product.imgURL}}
                ></Image>

            <Text style={styles.title}>{product.title}</Text>

            <Text style={styles.price}>{product.price}</Text>

            {/* stokta olup olmama durumu */}
            {!product.inStock && (
                <Text style={styles.noStock}>STOKTA YOK</Text>
            )}
                

        </View>
    )
}

export default ProductCard