import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
import OTPTextInput from 'react-native-otp-textinput'
import { COLORS, FONTS } from '../constants'

const OTPVerification = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 22
                }}>
                    <View>
                        <OTPTextInput
                            textInputStyle={{
                                backgroundColor: COLORS.secondaryWhite,
                                borderColor: COLORS.secondaryWhite,
                                borderWidth: 1,
                                borderRadius: 6,
                                borderBottomWidth: 1
                            }}
                            inputCount={4}
                            tintColor={COLORS.primary}
                        />
                        <TouchableOpacity style={{
                            marginVertical: 10
                        }}>
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.primary,
                                textAlign: "center"
                            }}>
                                Reenviar código
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Button
                        title="VERIFICAR"
                        onPress={() => navigation.navigate('SuccessVerification')}
                        filled
                        style={{
                            width: "80%",
                            marginVertical: 14
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default OTPVerification

const styles = StyleSheet.create({})