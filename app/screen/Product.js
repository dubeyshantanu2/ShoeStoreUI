import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import colors from '../config/colors';

const ShoesColor = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        color: "red",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        color: "yellow",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        color: "blue",
    },
    {
        id: "58694a0145571e29d72",
        color: "green",
    },
];
const ShoesSize = [
    {
        id: "bd7acbea-c1b1abb28ba",
        size: 7,
    },
    {
        id: "3acd3-a4f8-fbd91aa97f63",
        size: 8,
    },
    {
        id: "58694a09d72",
        size: 9,
    },
    {
        id: "5865571e29d72",
        size: 10,
    },
];

const Product = () => {

    const route = useRoute();
    const [selectedId, setSelectedId] = useState(null);
    const [selectedsize, setSelectedsize] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "black" : item.color;
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: item.color, marginHorizontal: 10, marginVertical: 10, borderRadius: 8, borderWidth: 3, borderColor: backgroundColor }} onPress={() => setSelectedId(item.id)}>
            </TouchableOpacity>
        );
    };

    const renderSize = ({ item }) => {
        const backgroundColor = item.id === selectedsize ? "black" : colors.lightgrey

        return (
            <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: item.color, marginHorizontal: 10, marginVertical: 10, borderRadius: 8, borderWidth: 3, borderColor: backgroundColor, justifyContent: "center", alignItems: "center" }} onPress={() => setSelectedsize(item.id)}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.size}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <View style={styles.container}>
                <View style={{
                    height: "40%", width: "100%", backgroundColor: colors.primary,
                }}>
                    <Image style={{ flex: 1 }} source={{ uri: `${route.params.image}` }} />
                </View>
                <View style={{ backgroundColor: colors.lightgrey, height: "65%", borderTopStartRadius: 40, borderTopEndRadius: 40, top: -20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, color: "#333333", margin: "6%" }}>{route.params.name}</Text>
                    <View style={{ height: 60 }}>
                        <Text style={{ fontWeight: "300", fontSize: 12, color: "#333333", marginHorizontal: "6%" }}>{route.params.description}</Text>
                    </View>

                    <View style={{ marginLeft: "6%" }}>
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Select a color</Text>
                        <FlatList
                            data={ShoesColor}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            extraData={selectedId}
                            horizontal
                        />
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Select a size</Text>
                        <FlatList
                            data={ShoesSize}
                            renderItem={renderSize}
                            keyExtractor={(item) => item.id}
                            extraData={selectedsize}
                            horizontal
                        />
                    </View>

                    <View style={styles.button}>
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500", left: 20 }}>₹ {route.params.price}</Text>
                        <View style={{ backgroundColor: colors.primary, justifyContent: "center", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40 }}>
                            <Text style={{ color: "#0F3057", fontSize: 16, fontWeight: "500" }}>Add to cart</Text>
                        </View>
                    </View>

                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,

    },
    item: {
        height: 40,
        width: 40,
    },
    button: {
        flexDirection: "row",
        width: "92%",
        height: "15%",
        backgroundColor: "#0F3057",
        borderRadius: 40,
        marginHorizontal: "4%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "4%"
    },
})

export default Product;