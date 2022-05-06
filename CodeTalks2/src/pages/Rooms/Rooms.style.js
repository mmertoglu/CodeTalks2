import {StyleSheet} from 'react-native'
import colors from '../../colors/colors'

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    headertext:{
        fontSize:16,
        color:'white',
        marginLeft:10
    },
    header_container:{
       borderBottomWidth:1,
       borderColor:colors.darkblue
    },
    inner_container:{
        margin:10,
        flex:1
    },
    icon:{
        marginRight:10
    }
})