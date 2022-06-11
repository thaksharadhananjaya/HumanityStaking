//import React, { useState } from 'react';
import {  Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWindowClose, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function AppBar() {
    /* const [state, setState] = useState({ search: false });
    const showHideSearch = () => {
        state.search ? setState({ search: false }) :
            setState({ search: true });
    } */
    return (

        <Appbar.Header style={{ width: '100%',  backgroundColor: 'transparent', color: 'white', paddingLeft: 20, paddingRight: 20 }}>
            <FontAwesomeIcon  icon={faBars} color='white' size={22} style={{marginRight:150,}} />
            <Image           
                source={require('../../assets/images/metamask.png')}
                style={{ width: 30, height: 30, marginLeft:150, }}
            />
            {/*<TextInput
                style={state.search ? {
                    height: 40,
                    borderColor: 'white',
                    borderWidth: 1,
                    width: '80%',
                    marginLeft: 16,
                    marginRight: 16,
                    padding: 8,
                    borderRadius: 8,
                    color: 'white'
                } : {
                    height: 40,
                    borderColor: 'white',
                    borderWidth: 1,
                    width: '80%',
                    marginLeft: 16,
                    marginRight: 16,
                    padding: 8,
                    borderRadius: 8,
                    display: 'none'
                }}

                placeholderTextColor="#999793"
                placeholder="Search"
            />
            <View style={!state.search ? {
                width: '80%',
                marginLeft: 16,
                marginRight: 16,
            } : { display: 'none' }} />
            <TouchableOpacity onPress={showHideSearch}><View style={{backgroundColor:'#7a7c80', padding:8, borderRadius:8}}><FontAwesomeIcon icon={state.search ? faWindowClose : faSearch} color='white' /></View></TouchableOpacity>*/}
        </Appbar.Header>
    );
}