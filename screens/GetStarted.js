import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, images, SIZES } from '../constants'
import Button from '../components/Button'

const GetStarted = ({ navigation }) => {
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
                        style={{
                            tintColor: COLORS.primary,
                            marginVertical: 80
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
                    <View style={{
                        marginVertical: 40
                    }}>
                        <Text style={{
                            ...FONTS.body3,
                            textAlign: "center"
                        }}>
                            Animate a donar sangre y ayudar a todas aquellas personas
                            cerca tuyo que lo necesitan
                        </Text>
                    </View>
                    <Button
                        title="INICIAR SESION"
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            width: "100%",
                            marginBottom: SIZES.padding
                        }}
                    />
                    <Button
                        title="REGISTRARSE"
                        onPress={() => navigation.navigate('Register')}
                        filled
                        style={{
                            width: "100%",
                            marginBottom: SIZES.padding
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default GetStarted

const styles = StyleSheet.create({})