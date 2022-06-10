
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { View } from 'react-native'
import { Component } from "react/cjs/react.production.min"
import { Platform } from 'react-native'



export default class BottomBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../assets/images/banner_bottom1.png'),
                require('../../assets/images/banner_bottom2.png'),
                
            ]
        };
    }
    render() {
        return (
            <View style={{ flex: 1, height: 152 , paddingBottom:32}}>
                <SliderBox
                
                    images={this.state.images}
                    sliderBoxHeight={120}
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 15,
                        marginHorizontal: 10,
                        padding: 0,
                        margin: 0
                    }}
                    onCurrentImagePressed={index =>
                        console.log(`image ${index} pressed`)
                    }
                    ImageComponentStyle={{borderRadius: 16, width: '97%', marginTop: 5, width:'90%'}}
                />
            </View>
        );
    }
}