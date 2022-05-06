import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 250,
      height: 250,
      backgroundColor: 'wheat',
      borderRadius: 50,
    },
    controls: {
      position: 'absolute',
      width: '100%',
      bottom: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dotGroup: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      borderWidth: 1.5,
      borderColor: '#ffffff',
    },
    dotActive: {
      backgroundColor: '#ffffff',
    },
    buttons: {
      fontSize: 14,
      color: '#ffffff',
      marginHorizontal: 14,
      padding: 15,
    },
    welcometext:{
        color:'white',
        fontSize:30,
        marginTop:20,
        fontWeight:'600',
        fontFamily:'italic'
    },
    description:{
        color:'white',
        position:'absolute',
        bottom:160,
        fontSize:20
    }
  });