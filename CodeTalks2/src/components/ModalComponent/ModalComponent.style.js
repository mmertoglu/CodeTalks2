import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../colors/colors';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.lightblue,
        padding:10,
        borderRadius:8,
        height:Dimensions.get('window').height/4,
       justifyContent:'space-around',
        alignItems:'center'
        
    },
    inputcontainer:{
        flex:1
    },
    input:{
        backgroundColor:'white',
        borderRadius:8,
        paddingHorizontal:8,
        marginRight:10,
        marginTop:20,
        marginLeft:10,
        width:'100%'
        
    },
    modal:{
        justifyContent:'flex-end'
    },
    button:{
        backgroundColor:colors.darkblue,
        width:200,
        alignItems:'center',
        borderRadius:12,
        marginTop:20,
        padding:10
        
        
    },
    buttontext:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})