import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screen/Login";
import HomeAdmin from "../screen/HomeAdmin";
import HomeUser from "../screen/HomeUser";
import Product from "../screen/Product";

const Stack = createNativeStackNavigator();

const AppNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="HomeAdmin"
                component={HomeAdmin}
            />
            <Stack.Screen
                name="HomeUser"
                component={HomeUser}
            />
            <Stack.Screen
                name="Product"
                component={Product}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator;