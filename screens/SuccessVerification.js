import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
import { images } from '../constants'

const SuccessVerification = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 22
                }}>
                    <Image
                        source={images.success}
                        resizeMode= "contain"
                        style={{
                            marginBottom: 40
                        }}
                    />
                    <Button
                        title="FINALIZAR"
                        onPress={() => navigation.navigate('BottomTabNavigation')}
                        filled
                        style={{
                            width: "90%",
                            marginVertical: 14
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default SuccessVerification

const styles = StyleSheet.create({})