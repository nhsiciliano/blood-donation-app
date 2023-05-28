import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useReducer, useCallback } from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, images } from '../constants'
import Input from '../components/Input'
import Button from '../components/Button'
import { MaterialIcons } from '@expo/vector-icons'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/validateActions'

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const ResetPassword = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result })
        },
        [dispatchFormState]
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{
                    flex: 1,
                    marginHorizontal: 22,
                    alignItems: "center"
                }}>
                    <Image
                        source={images.logo}
                        resizeMode= "contain"
                        style={{
                            tintColor: COLORS.primary,
                            marginVertical: 48
                        }}
                    />
                    <View style={{
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Text style={{...FONTS.h1, color: COLORS.primary}}>Recuperar</Text>
                        <Text style={{...FONTS.h1, color: COLORS.black, marginVertical: -12}}></Text>
                        <Text style={{...FONTS.h1, color: COLORS.black}}>Contraseña</Text>
                    </View>
                    <View style={{
                        marginVertical: 20
                    }}>
                        <Input
                            icon="email"
                            iconPack={MaterialIcons}
                            id="email"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities['email']}
                            placeholder="Ingresa tu email"
                            keyboardType="email-address"
                        />
                    </View>
                        <Text style={{
                            ...FONTS.body3,
                            textAlign: "center",
                            marginVertical: 2
                        }}>
                            Recibiras un email en la dirección con la que te registraste que contrendra un
                            link para restablecer la contraseña.
                        </Text>
                        <Button
                            title="ENVIAR"
                            onPress={() => navigation.navigate('OTPVerification')}
                            filled
                            style={{
                                width: "90%",
                                marginVertical: 18
                            }}
                        />
                    
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({})