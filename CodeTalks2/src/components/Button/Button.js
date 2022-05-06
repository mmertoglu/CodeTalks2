import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import styles from './Button.style'

const Button = ({buttontext,theme,onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles[theme].button} >
            <Text style={styles[theme].buttontext} >{buttontext}</Text>
        </TouchableOpacity>
    )
}
export default Button;