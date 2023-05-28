import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? "#ff2156" : "#808080"
    return (
        <View 
            style={{
                width: 8,
                height: 8,
                marginHorizontal: 3,
                borderRadius: 4,
                backgroundColor
            }}
        />
    )
}

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{
            marginRight: 20,
        }}

        {...props}
        >
            <Text style={{ color: "#ff2156", fontSize: 14, fontWeight: "700" }}>Comenzar</Text>
    </TouchableOpacity>
)

const OnboardingStarter = ({ navigation }) => {
    return (
            <Onboarding
                onSkip={() => navigation.navigate('GetStarted')}
                onDone={() => navigation.navigate('GetStarted')}
                DotComponent={Dots}
                bottomBarColor='#ffffff'
                DoneButtonComponent={Done}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/onboarding_1.png')} />,
                        title: 'Encuentra donantes de sangre cerca tuyo',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/images/onboarding_2.png')} />,
                        title: 'Encuentra donantes de sangre cerca tuyo',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
    )
}

export default OnboardingStarter

const styles = StyleSheet.create({})