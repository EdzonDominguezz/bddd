import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistorialProy from "../screens/HistorialProy";
import ApartadosProy from "../screens/ApartadosProy";
import DevolverProy from "../screens/DevolverProy";
import CustomHeader from "../Components/CustomHeader";

const ProyectorStack = createNativeStackNavigator();

const ProyectorStackScreen = () => {
    return (
        <ProyectorStack.Navigator>
            <ProyectorStack.Screen
                name="Apartados"
                component={ApartadosProy}
                options={({ navigation }) => ({
                    title: "Proyector",
                    headerRight: () => <CustomHeader navigation={navigation} />,
                })}
            />
            <ProyectorStack.Screen name="Devolver" component={DevolverProy} />
            <ProyectorStack.Screen name="Historial" component={HistorialProy} />
        </ProyectorStack.Navigator>
    );
}

export default ProyectorStackScreen;