import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet, Text, ImageBackground, TouchableOpacity, StatusBar, Switch, TextInput, Button, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import colors from '../config/colors';
import listings from "../config/csvjson";

const { height, width } = Dimensions.get('window');

export default function HomeAdmin() {

    const navigation = useNavigation();
    const shoes = listings;
    // const [check, setCheck] = useState(1);
    // console.log(shoes)
    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: 'https://sneaker-database-stockx.p.rapidapi.com/getproducts',
    //         params: { keywords: 'red', limit: '20' },
    //         headers: {
    //             'X-RapidAPI-Host': 'sneaker-database-stockx.p.rapidapi.com',
    //             'X-RapidAPI-Key': '535d6af130msh661558cd1146e4fp145f50jsnb12291964f9c'
    //         }
    //     })
    //         .then(function (res) {
    //             setShoesData(res.data)

    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // }, [check])

    const Item = ({ name, price, image, image1, image2, description }) => (
        <View style={styles.item}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ height: height * 0.15, width: height * 0.15, borderRadius: 20 }} source={{ uri: `${image}` }} />
                <View style={{ marginLeft: "4%" }}>
                    <View style={{ width: 180, marginTop: "10%", height: 50 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: 'left', color: "#333333" }}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: height * 0.2, justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: "5%", color: "#FE4D4A" }}>₹ {price}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Product', {
                                    name,
                                    price,
                                    image,
                                    image1,
                                    image2,
                                    description
                                });
                            }}
                            style={{ backgroundColor: "#0F3057", height: height * 0.06, width: height * 0.06, borderRadius: 40, left: 20, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="add" size={height * 0.04} color={"#fff"} style={{ left: 1 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item price={item.price} name={item.name} image={item.Images[0]} image1={item.Images[1]} image2={item.Images[2]} description={item.Description} />
    );

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <View style={styles.container}>
                <Text style={{ fontSize: height * 0.05, fontWeight: "bold" }}>Discover</Text>
                <Text style={{ fontSize: height * 0.03, fontWeight: "500", color: colors.darkgrey }}>All Product</Text>
                <View style={styles.textInputStyle}>
                    <Ionicons name="search" size={height * 0.03} color={colors.darkgrey} style={{ paddingRight: 10 }} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Search"
                        selectionColor={"black"}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => { fetchPosts(text); setSearchText(text) }}
                    />
                </View>
                <FlatList
                    data={shoes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: "4%"
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        marginTop: "2%",
        padding: 10,
    },
    button: {
        height: height * 0.085,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    },
    textInputStyle: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        height: 40,
        width: "100%",
        borderRadius: 8,
        paddingLeft: 10,
        marginTop: "2%",
        borderColor: "#009688",
        backgroundColor: colors.lightgrey,
        marginBottom: "2%"
    },
    item: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "#fff",
        padding: "4%",
        marginVertical: 8,
    },
})

