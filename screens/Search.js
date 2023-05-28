import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TouchableOpacity, 
    TextInput, 
    FlatList, 
    Image,
    Modal,
    TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, images, SIZES, icons } from '../constants'
import { MaterialIcons, Ionicons, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons'
import MapView from 'react-native-maps'
import { donors } from '../constants/data'

const Search = ({ navigation }) => {

    const [search, setSearch] = useState('')
    const [filteredDonors, setFilteredDonors] = useState(donors)
    const [modalVisible, setModalVisible] = useState(false)

    const handleSearch = (data) => {
        setSearch(data)
        const filteredData = donors.filter((donor) =>
            donor.location.toLowerCase().includes(data.toLowerCase())
        )
        setFilteredDonors(filteredData)
    }

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
                <Text style={{ ...FONTS.h4 }}>Buscar Donantes</Text>
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: COLORS.secondaryWhite,
                    height: 48,
                    marginVertical: 22,
                    paddingHorizontal: 22,
                    borderRadius: 4,
                }}
            >
                <Ionicons
                    name="ios-search-outline"
                    size={24}
                    color={COLORS.black}
                />
                <TextInput
                    style={{
                        width: SIZES.width - 144,
                        height: '100%',
                        marginHorizontal: 12,
                    }}
                    placeholder="Buscar"
                    value={search}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        height: 48,
                        width: 48,
                        borderRadius: 8,
                        marginHorizontal: -10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary,
                    }}
                >
                    <MaterialCommunityIcons
                        name="swap-vertical"
                        size={24}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                key={index}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 110,
                    borderColor: COLORS.secondaryWhite,
                    borderWidth: 1,
                    borderRadius: 10,
                }}
            >
                <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{
                        height: 85,
                        width: 85,
                        borderRadius: 10,
                        marginRight: 16,
                        marginLeft: 4,
                    }}
                />
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body4,
                            fontWeight: 'bold',
                            marginLeft: 4,
                            marginBottom: 6,
                        }}
                    >
                        {item.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <EvilIcons
                            name="location"
                            size={24}
                            color={COLORS.primary}
                        />
                        <Text
                            style={{
                                ...FONTS.body4,
                                marginLeft: 8,
                            }}
                        >
                            {item.location}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        right: 2,
                    }}
                >
                    <Image
                        source={icons.bloodVectorIcon}
                        resizeMode="contain"
                    />
                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            position: 'absolute',
                            top: 20,
                            left: 8,
                        }}
                    >
                        {item.bloodType}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderDonorList() {
        return (
            <View>
                <FlatList
                    data={filteredDonors}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                />
            </View>
        )
    }

    function renderDonorDetails() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            bottom: 0,
                        }}
                    >
                        <View
                            style={{
                                height: SIZES.height * 0.7,
                                width: SIZES.width,
                                backgroundColor: '#F5F5FF',
                                borderTopLeftRadius: 30,
                                borderTopRightRdius: 30,
                                position: 'absolute',
                                bottom: 0,
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={images.user2}
                                resizeMode="contain"
                                style={{
                                    height: 120,
                                    width: 120,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    top: -80,
                                }}
                            />
                            <View style={{ marginTop: 30 }}>
                                <Text
                                    style={{
                                        ...FONTS.h3,
                                        marginTop: 24,
                                    }}
                                >
                                    Julian Alvarez
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginVertical: SIZES.padding,
                                    }}
                                >
                                    <EvilIcons
                                        name="location"
                                        size={24}
                                        color={COLORS.primary}
                                    />
                                    <Text
                                        style={{
                                            ...FONTS.body4,
                                            marginLeft: 8,
                                        }}
                                    >
                                        San Isidro, BA
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    width: '100%',
                                    paddingHorizontal: 22,
                                    marginVertical: 22,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="hand-heart-outline"
                                        size={48}
                                        color={COLORS.primary}
                                    />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 12,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.primary,
                                                marginRight: 6,
                                            }}
                                        >
                                            6
                                        </Text>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.secondaryBlack,
                                            }}
                                        >
                                            Donaciones
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <MaterialIcons
                                        name="approval"
                                        size={48}
                                        color={COLORS.primary}
                                    />
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 12,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.primary,
                                                marginRight: 6,
                                            }}
                                        >
                                            Grupo y Factor
                                        </Text>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.secondaryBlack,
                                            }}
                                        >
                                            AB+
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    paddingHorizontal: 22,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => console.log('Pressed')}
                                    style={{
                                        backgroundColor: COLORS.secondary,
                                        width: 150,
                                        height: 50,
                                        borderRadius: SIZES.padding,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Ionicons
                                        name="person-add-outline"
                                        size={24}
                                        color={COLORS.white}
                                    />
                                    <Text
                                        style={{
                                            ...FONTS.body4,
                                            color: COLORS.white,
                                            marginLeft: 12,
                                        }}
                                    >
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
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Entypo
                                        name="forward"
                                        size={24}
                                        color={COLORS.white}
                                    />
                                    <Text
                                        style={{
                                            ...FONTS.body4,
                                            color: COLORS.white,
                                            marginLeft: 12,
                                        }}
                                    >
                                        Solicitar
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* just an example to show the maps */}
                            <View
                                style={{
                                    marginHorizontal: 22,
                                    borderRadius: 60,
                                }}
                            >
                                <MapView
                                    style={{
                                        height: 200,
                                        width: SIZES.width - 44,
                                        marginVertical: 22,
                                    }}
                                    intialRegion={{
                                        latitude: 17.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.09222,
                                        longitudeDelta: 0.0421,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{
                    flex: 1,
                    marginHorizontal: 22,
                    marginBottom: 200
                }}>
                    {renderHeader()}
                    {renderSearchBar()}
                    {renderDonorList()}
                    {renderDonorDetails()}
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({})