import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Banner() {

    const styles = StyleSheet.create({
        card: {
            width: '100%',
            height: 121,           
            marginTop: 24,
            paddingLeft:16,
            paddingRight:16,
            border: 1,
            borderRadius: 16,
        },
        image: {
            flex: 1,
            resizeMode: 'stretch',
            justifyContent: 'center',
          },
    });
    return (

        <View style={styles.card}>

            <ImageBackground imageStyle={{ borderRadius: 16}} source={require('../../assets/images/banner_top.png')} style={styles.image}>

            </ImageBackground>
        </View>

    );
}