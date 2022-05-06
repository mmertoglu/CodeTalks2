import React from "react";
import {Text,TouchableOpacity} from 'react-native'
import styles from './RoomCard.style'
const RoomCard = ({room,onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <Text style={styles.text} >{room.roomname}</Text>
        </TouchableOpacity>
    )
}
export default RoomCard