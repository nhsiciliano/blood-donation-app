import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, images, SIZES } from '../constants'
import * as Location from 'expo-location'
import { 
    Feather,
    AntDesign,
    EvilIcons,
    Entypo,
    Ionicons, 
    MaterialIcons,
    MaterialCommunityIcons} from '@expo/vector-icons'

const Profile = ({ navigation }) => {
    const [address, setAddress] = useState('Loading...');
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            const text = JSON.stringify(location);
            const parsedData = JSON.parse(text);
            const longitude = parsedData.coords.longitude;
            const latitude = parsedData.coords.latitude;
            let address = await Location.reverseGeocodeAsync({
                longitude,
                latitude
            });

            setAddress(`${address[0].name},${address[0].district},${address[0].city}`);
        }
        getPermissions();
    }, [])

    function renderHeader() {
        return (
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginRight: 20
            }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        height: 44,
                        width: 44,
                        borderRadius: 4,
                        backgroundColor: COLORS.secondaryWhite,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h4 }}>PERFIL</Text>
                <TouchableOpacity
                    onPress={() => console.log("Pressed")}
                >
                    <Feather
                        name='edit'
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderProfile() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    marginHorizontal: 22
                }}
            >
                <Image
                    source={images.user3}
                    resizeMode= 'contain'
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        marginTop: 10
                    }}
                />
                <Text style={{ ...FONTS.h2, marginTop: 24 }}>Yenny Milan</Text>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding
                }}>
                    <EvilIcons
                        name='location'
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 4
                        }}
                    >
                        {address}
                    </Text>
                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 22
            }}>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: COLORS.secondary,
                        width: 150,
                        height: 50,
                        borderRadius: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Ionicons
                        name='person-add-outline'
                        size={24}
                        color={COLORS.white}
                    />
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.white,
                        marginLeft: 12
                    }}>
                        Contactar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: COLORS.primary,
                        width: 150,
                        height: 50,
                        borderRadius: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Entypo
                        name='forward'
                        size={24}
                        color={COLORS.white}
                    />
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.white,
                        marginLeft: 12
                    }}>
                        Solicitar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderFeatures() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 12
            }}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Text style={{...FONTS.h1}}>A+</Text>
                    <Text style={{...FONTS.body3}}>Grupo y Factor</Text>
                </View>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Text style={{...FONTS.h1}}>04</Text>
                    <Text style={{...FONTS.body3}}>Donaciones</Text>
                </View>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Text style={{...FONTS.h1}}>02</Text>
                    <Text style={{...FONTS.body3}}>Solicitudes</Text>
                </View>
            </View>
        )
    }

    function renderSettings() {
        return (
            <View style={{
                flexDirection: 'column',
                marginVertical: 12
            }}>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12
                }}>
                    <MaterialCommunityIcons
                        name='calendar-clock-outline'
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text style={{
                        ...FONTS.body3,
                        marginLeft: 24
                    }}>Disponible para donar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12
                }}>
                    <Ionicons
                        name='share-outline'
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text style={{
                        ...FONTS.body3,
                        marginLeft: 24
                    }}>Invitar un amigo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12
                }}>
                    <Feather
                        name='info'
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text style={{
                        ...FONTS.body3,
                        marginLeft: 24
                    }}>Obtener ayuda</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12
                }}>
                    <AntDesign
                        name='logout'
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text style={{
                        ...FONTS.body3,
                        marginLeft: 24
                    }}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{
                    marginHorizontal: 22
                }}>
                    {renderHeader()}
                    {renderProfile()}
                    {renderButtons()}
                    {renderFeatures()}
                    {renderSettings()}
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})