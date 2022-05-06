import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StatusBar, LogBox, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './src/pages/Welcome/Welcome'
import Login from "./src/pages/Login/Login";
import SignUp from './src/pages/SignUp/SignUp'
import Rooms from "./src/pages/Rooms/Rooms";
import RoomDetail from "./src/pages/RoomDetail/RoomDetail";
import auth from '@react-native-firebase/auth'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "./src/colors/colors";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    auth().onUserChanged(user => {
      setUserSession(!!user)
    })
  }, [])
  const user = auth().currentUser;
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
  ])
  const goSignOut = async () => {
    try {
      await GoogleSignin.signOut();
     auth().signOut();
     setUserSession(!userSession)
    } catch (error) {
      console.log(error)
    }
    
}

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? <Stack.Screen options={{ headerShown: false }} name="WelcomePage" component={Welcome} /> :
          <Stack.Screen options={{
            title: `Welcome ${user ? user.email.split('@')[0] : ''}`,
            headerRight: () =>
             <TouchableOpacity> 
              <Icon name='logout' size={30} color='white'
                onPress={goSignOut} />
                </TouchableOpacity>,
            headerTitleStyle: 'white',
            headerTintColor: 'white',
            headerTitleStyle:{fontSize:16},
            headerStyle: { backgroundColor: colors.darkblue }
          }}
            name="RoomsPage"
            component={Rooms} />}

        <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="SignUpPage" component={SignUp} />

        <Stack.Screen options={{ headerShown: false }} name="RoomDetail" component={RoomDetail} />

      </Stack.Navigator>
      <StatusBar hidden />

    </NavigationContainer>
  )
}
export default App