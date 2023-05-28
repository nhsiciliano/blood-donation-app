import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useReducer, useCallback } from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/validateActions'

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const Login = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result })
        },
        [dispatchFormState]
    )
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <PageContainer>
                <View style={{
                    flex: 1,
                    maringHorizontal: 32,
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
                        <Text style={{...FONTS.h1, color: COLORS.primary}}>DONAR</Text>
                        <Text style={{...FONTS.h1, color: COLORS.black, marginVertical: -12}}></Text>
                        <Text style={{...FONTS.h1, color: COLORS.black}}>VIDA</Text>
                    </View>
                    <View style={{ marginVertical: 50 }}>
                        <Input
                            icon="email"
                            iconPack={MaterialIcons}
                            id="email"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities['email']}
                            placeholder="Ingresa tu email"
                            keyboardType="email-address"
                        />
                        <Input
                            icon="lock"
                            iconPack={FontAwesome}
                            id="password"
                            onInputChanged={inputChangedHandler}
                            errorText={formState.inputValidities['password']}
                            autoCapitalize="none"
                            placeholder="Ingresa tu contraseña"
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title="INICIAR SESION"
                        onPress={() => navigation.navigate('Login')}
                        filled
                        style={{
                            width: "90%"
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ResetPassword")}
                    >
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.primary,
                            marginVertical: 10,
                            textAlign: "center"
                        }}>
                            Olvidé mi contraseña
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        marginVertical: 20,
                        flexDirection: "row"
                        }}>
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.black
                        }}>
                            No tenés una cuenta? {" "}
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}
                        >
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.primary
                            }}>
                                Registrate
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )}   

export default Login

const styles = StyleSheet.create({})