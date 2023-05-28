import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useReducer, useCallback } from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { MaterialIcons, FontAwesome, Fontisto } from '@expo/vector-icons'
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

const Register = ({ navigation }) => {
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
                <ScrollView>
                    <View style={{
                        flex: 1,
                        marginHorizontal: 22,
                        alignItems: "center"
                    }}>
                        <View style={{
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: 50
                        }}>
                            <Text style={{...FONTS.h1, color: COLORS.primary}}>DONAR</Text>
                            <Text style={{...FONTS.h1, color: COLORS.black, marginVertical: -12}}></Text>
                            <Text style={{...FONTS.h1, color: COLORS.black}}>VIDA</Text>
                        </View>
                        <View style={{ marginVertical: 60 }}>
                            <Input
                                icon="user"
                                iconPack={FontAwesome}
                                id="fullName"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['fullName']}
                                placeholder="Nombre y apellido (como en el DNI)"
                            />
                            <Input
                                icon="email"
                                iconPack={MaterialIcons}
                                id="email"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['email']}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                            <Input
                                icon="lock"
                                iconPack={FontAwesome}
                                id="password"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['password']}
                                autoCapitalize="none"
                                placeholder="Contraseña"
                                secureTextEntry
                            />
                            <Input
                                icon="phone"
                                iconPack={FontAwesome}
                                id="phoneNumber"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['phoneNumber']}
                                placeholder="Número de teléfono"
                            />
                            <Input
                                icon="blood-drop"
                                iconPack={Fontisto}
                                id="bloodType"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['bloodType']}
                                placeholder="Grupo sanguíneo (si lo sabes)"
                            />
                            <Input
                                icon="location-on"
                                iconPack={MaterialIcons}
                                id="location"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['location']}
                                placeholder="Ubicación (provincia y ciudad)"
                            />
                        </View>
                        <Button
                                title="REGISTRARSE"
                                onPress={() => navigation.navigate('Home')}
                                filled
                                style={{
                                    width: "90%"
                                }}
                        />
                        <View style={{
                            marginVertical: 20,
                            flexDirection: "row"
                            }}>
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.black
                            }}>
                                Ya tenés una cuenta? {" "}
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={{
                                    ...FONTS.body3,
                                    color: COLORS.primary
                                }}>
                                    Iniciar sesión
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({})