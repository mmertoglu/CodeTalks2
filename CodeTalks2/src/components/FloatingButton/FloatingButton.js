import React from "react";
import { TouchableOpacity,Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style'

const FloatingButton = ({onPress}) => {
    return(
       <View style={styles.container} >
       <TouchableOpacity 
       onPress={onPress}
       style={styles.button} >
            <Icon name="plus" size={40} color='white' />
        </TouchableOpacity>
        </View>
    )
}
export default FloatingButton