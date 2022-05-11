import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, Text, ImageBackground, TouchableOpacity, StatusBar, Switch, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { height, width } = Dimensions.get('window');

export default function HomeAdmin() {

    const [amount, setAmount] = useState('');
    const [brand, setBrand] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(null);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={"white"} />
            <View style={styles.container}>
                <Text style={{ fontSize: height * 0.04, fontWeight: "bold" }}>Enter product details</Text>
                <Text style={{ fontSize: height * 0.02, marginTop: "2%" }}>Enter brand name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Brand Name"
                    autoCapitalize="words"
                    autoComplete="name" //only android
                    keyboardType="default"
                    returnKeyType="next"
                    selectionColor={"black"}
                    textContentType="name" //only ios
                    onChangeText={(text) => setBrand(text)}
                    clearButtonMode="always" //only on IOS
                />
                <Text style={{ fontSize: height * 0.02, marginTop: "2%" }}>Enter amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    selectionColor={"black"}
                    textContentType="organizationName"//only ios
                    onChangeText={(text) => setAmount(text)}
                    clearButtonMode="always" //only on IOS
                />
                <Text style={{ fontSize: height * 0.02, marginTop: "2%" }}>Enter description</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    placeholder="Enter Description"
                    keyboardType="default"
                    autoCapitalize="words"
                    returnKeyType="done"
                    selectionColor={"black"}
                    onChangeText={(text) => setDescription(text)}
                    clearButtonMode="always" //only on IOS
                />

                <View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "2%" }}>
                    <Text style={{ fontSize: height * 0.02, marginTop: "2%" }}>Available</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <Button title="Select Images" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: "4%" }} />}

                <TouchableOpacity
                    style={[styles.button, { marginTop: height * 0.03, backgroundColor: "red" }]}
                // onPress={() => navigation.navigate("HomeAdmin")}
                >
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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
    }
})

