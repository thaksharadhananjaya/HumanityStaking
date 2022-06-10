import React from 'react';
import { StyleSheet } from 'react-native';
import { SpecialScrollView, SpecialView } from 'react-native-scroll-to-element';
import Card from './card';


export default function CardList() {

    const styles = StyleSheet.create({
        card: {
            height: 380,
        },

    });

    
    return (
        <SpecialScrollView horizontal
            style={styles.card}

        >
            <Card url={require('../../assets/images/card_image.png')} />
            <SpecialView

                focused

            >
                <Card url={require('../../assets/images/card_image.png')} />
            </SpecialView>
            <Card url={require('../../assets/images/card_image.png')} />
        </SpecialScrollView>

    );
}