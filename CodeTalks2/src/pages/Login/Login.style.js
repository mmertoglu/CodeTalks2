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
        marginBottom:40,
        alignSelf:'center'
    },
    footertext:{
        color:'#e6f2ff',
        marginRight:10
       
    },
    footer_container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    registertext:{
        color:'white',
        textDecorationLine:'underline',
        fontWeight:'bold'
    }
       
})