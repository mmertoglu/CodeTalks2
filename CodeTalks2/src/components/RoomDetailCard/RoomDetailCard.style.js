import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        elevation:8,
        margin:10,
        paddingHorizontal:10,
        paddingVertical:8
    },
    header_container:{
        flexDirection:'row',
        borderBottomColor:'black',
        justifyContent:'space-between',
        borderBottomWidth:1,
        marginBottom:4
        
    },
    usertext:{
        fontSize:16,
        fontStyle:'italic',
        fontWeight:'bold'
    },
    messagetext:{
        fontStyle:'italic'
    },
    datetext:{
        fontWeight:'bold'
    }
})