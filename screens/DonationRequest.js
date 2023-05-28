import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, images, SIZES } from '../constants'
import { MaterialIcons } from '@expo/vector-icons'
import { donationRequests } from '../constants/data'
import DonationCard from '../components/DonationCard'

const DonationRequest = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        height: 44,
                        width: 44,
                        borderRadius: 4,
                        backgroundColor: COLORS.secondaryWhite,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h4 }}>Solicitudes de Donación</Text>
            </View>
        )
    }

    function renderContent() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {
                    donationRequests.map((donationRequest, index) => (
                        <DonationCard
                            key={index}
                            name={donationRequest.name}
                            location={donationRequest.location}
                            postedDate={donationRequest.postedDate}
                        />
                    ))
                }
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{
                    marginHorizontal: 22
                }}>
                    {renderHeader()}
                    {renderContent()}
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default DonationRequest

const styles = StyleSheet.create({})