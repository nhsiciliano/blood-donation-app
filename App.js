import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Screens
import OnboardingStarter from './screens/OnboardingStarter'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import ResetPassword from './screens/ResetPassword'
import OTPVerification from './screens/OTPVerification'
import SuccessVerification from './screens/SuccessVerification'
import GetStarted from './screens/GetStarted'
import BottomTabNavigation from './navigation/BottomTabNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched',"true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false)
      }
    })
    AsyncStorage.clear();
  }, []);

  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Poppins-Black.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        initialRouteName={ isFirstLaunch ? 'OnboardingStarter' : 'GetStarted' }
      >
        <Stack.Screen
          name='OnboardingStarter'
          component={OnboardingStarter}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='BottomTabNavigation'
          component={BottomTabNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='OTPVerification'
          component={OTPVerification}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='SuccessVerification'
          component={SuccessVerification}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='GetStarted'
          component={GetStarted}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
