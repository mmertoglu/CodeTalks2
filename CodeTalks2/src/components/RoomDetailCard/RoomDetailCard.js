import React from "react";
import {View,Text} from 'react-native'
import styles from './RoomDetailCard.style'
import { formatDistance,parseISO } from 'date-fns'
import {tr} from 'date-fns/locale'
const RoomDetailCard = ({messages}) => {
   const parsedDate = parseISO(messages.date)
    const formatteddate =  formatDistance(parsedDate, new Date(), { 
        addSuffix: true,
        includeSeconds:true
    })
    return(
        <View style={styles.container}>
            <View style={styles.header_container} >
            <Text  style={styles.usertext} >
                    {messages.username.length<10
                    ? `${messages.username}`
                    : `${messages.username.substring(0,9)}...`
                
                }</Text>
            <Text style={styles.datetext} >{formatteddate}</Text>
            </View>
            <Text style={styles.messagetext} >{messages.message}</Text>
        </View>
    )
}
export default RoomDetailCard