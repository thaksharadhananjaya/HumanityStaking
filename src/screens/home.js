
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Component } from "react/cjs/react.production.min"
import { LinearGradient } from 'expo-linear-gradient';
import AppBar from '../compononts/appbar';
import Banner from '../compononts/banner';
import BottomBanner from '../compononts/banner_slide_show';
import CardList from '../compononts/card_list';
import BannerAd from '../compononts/admob_banner';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { search: false }
    }
    showSearch = () => {
        this.setState({ search: true });
        console.log("ggg")
    }
    render() {
        const styles = StyleSheet.create({
            header: {
                width: '100%',
                textAlign: 'left',
                paddingTop: 25,
                paddingLeft: 16,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 32,
                fontFamily: 'Futurist'
            },

            linearGradient: {
                flex: 1,
                alignItems: 'center',
                padding: 8
            },
        }
        );
        return <LinearGradient
            // Background Linear Gradient
            start={{ x: 2, y: 0 }} end={{ x: 1, y: -1 }}
            colors={['#110F2F', '#2E26D6']}
            style={styles.linearGradient}
        >
            <AppBar/>
            <ScrollView>
            <Text style={styles.header}>Welcome</Text>
            <Banner />
            <CardList/>
            <BottomBanner/><StatusBar style="auto" />
            </ScrollView>
            <BannerAd/>
        </LinearGradient>                                                 
    }



}


export default Home;