import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.lightblue,
       
    },
    roomname:{
        color:colors.red,
        textAlign:'center',
        fontSize:24,
        fontWeight:'600'
    },
    header_container:{
        borderRadius:10,
        borderWidth:2,
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderStyle:'dashed',
        borderColor:'tomato'
    }
})