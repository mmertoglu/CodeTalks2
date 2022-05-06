import React, { useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import styles from './SignUp.style'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { GoogleSigninButton,GoogleSignin } from '@react-native-google-signin/google-signin'


const initialFormValues = {
    username: '',
    password: '',
    repassword: '',
}


const Login = ({ navigation }) => {
   useEffect(()=>{
    GoogleSignin.configure({
        webClientId: '860396303359-4d5tl798tk8eo3p9jv70h8qeno33urea.apps.googleusercontent.com',
      });
   },[])
   
    const [loading, setLoading] = React.useState(false)
    async function onGoogleButtonPress() {
       try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
         navigation.navigate('RoomsPage')
       } catch (error) {
           console.log(error)
       }
      }
    const handleFormSubmit = async (formValues) => {
        if (formValues.password!==formValues.repassword) {
            Alert.alert('Şifreler Aynı olmalıdır')
            return;
        }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(formValues.username, formValues.password)
            setLoading(false)
            navigation.navigate('RoomsPage')
        } catch (error) {
            setLoading(true)
            console.log(error)
        }

    }

    return (
        <ImageBackground style={styles.container} source={require('../../assets/bgcnew.jpg')} >
            <View style={styles.usercontainer} >
                <Icon name="user" color='white' size={140} />
            </View>
            <Text style={styles.headertext} >SignUp</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            placeHolder='e-mail...'
                            onChangeText={handleChange('username')}
                            value={values.username} />
                        <Input
                            placeHolder='password...'
                            onChangeText={handleChange('password')}
                            value={values.password} />
                        <Input
                            placeHolder='re-password...'
                            onChangeText={handleChange('repassword')}
                            value={values.repassword} />
                        <Button theme='fourth' buttontext='Sign Up' onPress={handleSubmit} />
                    </>
                )
                }
            </Formik>
            <View style={styles.footer_container} >
                <View style={styles.or_line} ></View>
                <Text style={styles.or_text} >or</Text>
                <View style={styles.or_line} ></View>
            </View>
            <GoogleSigninButton
                style={{ width: '100%', height: 48,marginTop:30,marginBottom:10,borderRadius:12 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={onGoogleButtonPress}
                
            />
        </ImageBackground>
    )
}
export default Login