import React from "react";
import {View,Text,ImageBackground,TouchableOpacity} from 'react-native'
import styles from './Login.style'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button'
import {Formik} from 'formik'
import auth from '@react-native-firebase/auth'


const initialFormValues = {
    username : '',
    password:'',
}

const Login = ({navigation}) => {
    const [loading,setLoading] = React.useState(false)
   function onHandleSignUp () {
       navigation.navigate('SignUpPage')
   }
   const handleFormSubmit  = async (formValues) => {
    try {
        setLoading(true)
        await auth().signInWithEmailAndPassword(formValues.username,formValues.password)
        setLoading(false)
        navigation.navigate('RoomsPage')
    } catch (error) {
        setLoading(true)
        console.log(error)
    }
   
   }
   
    return(
        <ImageBackground  style={styles.container}  source={require('../../assets/bgcnew.jpg')} >
            <View style={styles.usercontainer} >
            <Icon name="user" color='white' size={140} />
            </View>
            <Text style={styles.headertext} >Login</Text>
           <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
               {({values, handleChange,handleSubmit}) => (
                   <>
                   <Input 
                   placeHolder='e-mail...' 
                   onChangeText={handleChange('username')}
                   value={values.username}  />
                   <Input 
                   placeHolder='password...' 
                   onChangeText={handleChange('password')}
                   value={values.password}  />
                   <Button theme='primary' buttontext='Login' onPress={handleSubmit}  />
                   </>
               ) 
        }
            </Formik>
            <View style={styles.footer_container} >
            <Text style={styles.footertext} >Don't you have an account ?</Text>
            <TouchableOpacity onPress={onHandleSignUp} >
                <Text  style={styles.registertext} >Register</Text>
            </TouchableOpacity>
            </View>
            
       </ImageBackground>
       
    )
}
export default Login