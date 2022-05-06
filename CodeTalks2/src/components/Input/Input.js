import React from "react";
import {View,Text,TextInput} from 'react-native'
import styles from './Input.style'

const Input = ({placeHolder,value,onChangeText}) => {
    return(
        <View style={styles.container} >
            <TextInput 
            autoCapitalize='none'
            placeholderTextColor='white'
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeHolder}/>
        </View>
    )
}
export default Input