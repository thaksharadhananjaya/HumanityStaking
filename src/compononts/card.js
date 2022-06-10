import React from 'react';
import { View, StyleSheet, ImageBackground, TextInput, Text, TouchableOpacity } from 'react-native';
import { AdMobRewarded } from "expo-ads-admob";



export default function Card({ url }) {
    // AD UNIT ID FOR REWARDED AD
    const rewardedAdID = Platform.select({
        ios: "ca-app-pub-1209942377805776/7007804397",
        android: "ca-app-pub-1209942377805776/9526156528",
    });
    /* REWARD AD
    function loadAdd() {
        AdMobRewarded.setAdUnitID(rewardedAdID);
        AdMobRewarded.requestAdAsync();
    }*/


    const stack = () => {

    }
    const claim = () => {

    }
    const styles = StyleSheet.create({
        card: {
            width: 300,
            height: 350,
            marginTop: 8,
            marginRight: 16,
            marginLeft: 16,
            border: 1,
            borderRadius: 16,
        },
        image: {
            flex: 1,
            resizeMode: 'stretch',
            justifyContent: 'flex-end',

        },

        container: {
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: 'center',
        }
    });


    return (

        <View style={styles.card}>

            <ImageBackground imageStyle={{ borderRadius: 24 }} source={url} style={styles.image}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={{
                            width: 135,
                            height: 40,
                            borderColor: 'red',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8,
                            backgroundColor: '#392f34',
                        }}
                        onPress={ async () =>  {
                           await AdMobRewarded.setAdUnitID(rewardedAdID);
                           await AdMobRewarded.requestAdAsync(); 
                           await AdMobRewarded.showAdAsync()
                        }}
                    >
                        <Text style={{ color: '#FFFFFF', padding: 2 }}>Watch AD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 135,
                            height: 40,
                            borderColor: 'red',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8,
                            backgroundColor: '#fbff0c',
                        }}
                        onPress={stack}
                    >
                        <Text style={{ color: '#000000', padding: 2 }}>Stack/ UnStack</Text>
                    </TouchableOpacity></View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput
                        style={{
                            height: 35,
                            borderColor: "#999793",
                            borderWidth: 2,
                            width: 260,
                            marginTop: 4,
                            marginBottom: 12,
                            padding: 8,
                            borderRadius: 8,
                            color: 'white'
                        }}
                        keyboardType='numeric'
                        placeholderTextColor="#999793"
                        placeholder="Token ID"
                    />
                    <TouchableOpacity
                        style={{
                            width: 180,
                            height: 40,
                            borderColor: 'red',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 8,
                            marginBottom: 8,
                            backgroundColor: '#2e26d6',
                        }}
                        onPress={claim}
                    >
                        <Text style={{ color: '#FFFFFF', padding: 2 }}>Claim Reward</Text>
                    </TouchableOpacity></View>

            </ImageBackground>
        </View>

    );
}