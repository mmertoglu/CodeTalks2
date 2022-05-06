import React from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import styles from './RoomDetail.style'
import Modal from 'react-native-modal'
import ModalComponent from "../../components/ModalComponent/ModalComponents";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import RoomDetailCard from "../../components/RoomDetailCard/RoomDetailCard";
import ParseContent from '../../utils/ParseContent'

const RoomDetail = ({ route }) => {
    const [loading, setLoading] = React.useState(false)
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [messageList, setMessageList] = React.useState([])
    const { item } = route.params
    function handleClose() {
        setIsModalVisible(!isModalVisible)
    }
    function handleSendMessage(content) {
        setIsModalVisible(!isModalVisible)
        createContent(content)
    }
     function createContent(content) {
        const userMail = auth().currentUser.email
        try {
            const contentData = {
                message: content,
                username: userMail.split('@')[0],
                date: new Date().toISOString(),
            }
            setLoading(true)
             database().ref(`rooms/${item.id}/${item.roomname.split('#')[0]}/`).push(contentData)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        database()
            .ref(`rooms/${item.id}/${item.roomname.split('#')[0]}`)
            .on('value', snapshot => {
                const newContentData = snapshot.val();
                const ParsedData = ParseContent(newContentData)
                setMessageList(ParsedData)
            })
    }, [])
    const renderMessages = ({ item }) => <RoomDetailCard messages={item} />
    return (

        <View style={styles.container} >
           <View style={styles.header_container} >
            <Text style={styles.roomname} >
                {item.roomname} room created
            </Text>
            </View>
            {loading?<ActivityIndicator/>:
             <FlatList
             data={messageList}
             renderItem={renderMessages}
         />
            }
            <ModalComponent
                isVisible={isModalVisible}
                onClose={handleClose}
                buttonText='Send Message'
                placeholder='text message...'
                onCreate={handleSendMessage} />
            <FloatingButton onPress={handleClose} />
        </View>

    )
}
export default RoomDetail