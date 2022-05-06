import React,{useEffect} from "react";
import { View, Text, FlatList, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth'
import styles from './Rooms.style'
import Button from "../../components/Button/Button";
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ModalComponent from "../../components/ModalComponent/ModalComponents";
import database from '@react-native-firebase/database'
import ParseContent from '../../utils/ParseContent'
import RoomCard from "../../components/RoomCard/RoomCard";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../colors/colors";
import { tr } from "date-fns/locale";

function Rooms({ navigation }) {
    const googleuser = GoogleSignin.currentUser;
    const [loading,setLoading] = React.useState(false)
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [user, setUser] = React.useState(auth().currentUser)
    const [rooms,setRooms] = React.useState([])
    //const userMail = user.email[0].toUpperCase() + user.email.substring(1)
    const handleClose = () => {
        setIsModalVisible(!isModalVisible)
    }

    const handleCreate = (content) => {
        setIsModalVisible(!isModalVisible)
        createContent(content)
    }
    const createContent =  (content) => {
        try {
            const contentData = {
                roomname : content
            }
            setLoading(true)
            database().ref('rooms/').push(contentData)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const goSignOut = async () => {
        await GoogleSignin.signOut();
        await auth().signOut();
        setUser('')
        navigation.navigate('LoginPage')
    }
    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '860396303359-4d5tl798tk8eo3p9jv70h8qeno33urea.apps.googleusercontent.com',
          });
        database()
        .ref('rooms/')
        .on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = ParseContent(contentData)
            setRooms(parsedData)
        })
    },[])
    const goRoomDetail = (item) => {
        navigation.navigate('RoomDetail',{item})
    }
    const renderItem = ({item}) => <RoomCard room={item} onPress={()=>goRoomDetail(item)}/>
    return (
        <View style={styles.container} >
            <View style={styles.header_container} >
            <Text style={{color:colors.red,alignSelf:'center',marginTop:10,fontSize:24,fontWeight:'bold'}} >Rooms</Text>
            </View>
           <View style={styles.inner_container}>
            {loading?<ActivityIndicator size={'large'} />:
            <FlatList 
            numColumns='2'
            data={rooms}
            renderItem={renderItem}
             />
            }
            
            </View>
            <FloatingButton onPress={handleClose} />
            <ModalComponent 
            isVisible={isModalVisible} 
            onClose={handleClose} 
            onCreate={handleCreate} 
            buttonText='Create'
            placeholder='create a room...' />
        </View>
    )
}
export default Rooms;