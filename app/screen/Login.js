import React from 'react';
import { Dimensions, View, StyleSheet, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

const { height } = Dimensions.get('window');

function Login({ navigation }) {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/pic1.png")} resizeMode="cover" style={styles.image}>
                    <TouchableOpacity
                        style={[styles.button, { marginTop: height * 0.75, backgroundColor: "#FF4343" }]}
                        onPress={() => navigation.navigate("HomeUser")}>
                        <Text style={styles.text}>User</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { marginTop: height * 0.03, backgroundColor: "grey" }]}
                        onPress={() => navigation.navigate("HomeAdmin")}>
                        <Text style={styles.text}>Admin</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: height * 0.02
    },
    button: {
        height: height * 0.085,
        width: "75%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    }
})

export default Login;