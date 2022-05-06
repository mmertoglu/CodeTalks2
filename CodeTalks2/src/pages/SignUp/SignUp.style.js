import {StyleSheet,Dimensions} from 'react-native'


export default StyleSheet.create({
    container:{
        flex:1,
        resizeMode:'stretch',
        justifyContent:'center',
        padding:20
        
    },
    usercontainer:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:4,
        borderColor:'white',
        alignSelf:'center'
    },
    headertext:{
        color:'white',
        marginTop:30,
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        alignSelf:'center'
    },
    footertext:{
        color:'#e6f2ff',
        marginRight:10
       
    },
    footer_container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    or_text:{
        color:'white',
        alignSelf:'center',
        fontWeight:'bold',
        marginLeft:10,
        marginRight:10
        
    },
    or_line:{
        height:1,
        backgroundColor:'white',
        width:140
    }
       
})