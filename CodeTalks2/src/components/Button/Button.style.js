import {StyleSheet} from 'react-native'
import colors from '../../colors/colors'
const base_style = StyleSheet.create({
    button:{
        borderRadius:12,
        alignItems:'center',
        height:40,
       
        justifyContent:'center'
    },
    buttontext:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default {
    primary:StyleSheet.create({
        ...base_style,
        button:{
            ...base_style.button,
            backgroundColor:'white',
            marginTop:60,
            marginBottom:12,
        },
        buttontext:{
            ...base_style.buttontext,
            color:colors.darkblue
           
        }
    }),
    secondary:StyleSheet.create({
        ...base_style,
        button:{
            ...base_style.button,
            borderWidth:1,
            borderColor:'white',
            
        },
        buttontext:{
            ...base_style.buttontext,
           
            color:'white',
        }
    }),
    third:StyleSheet.create({
        ...base_style,
        button:{
            ...base_style.button,
            backgroundColor:'white',
            position:'absolute',
            bottom:60,
            marginTop:60,
            marginBottom:12,
            width:200
        },
        buttontext:{
            ...base_style.buttontext,
            color:colors.darkblue
           
        }
    }),
    fourth:StyleSheet.create({
        ...base_style,
        button:{
            ...base_style.button,
            backgroundColor:'white',
            marginTop:40,
            marginBottom:8,
            
        },
        buttontext:{
            ...base_style.buttontext,
            color:colors.darkblue
           
        }
    })
}