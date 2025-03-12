import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1Otros from "../screens/Screen1Otros";
import Screen2Otros from "../screens/Screen2Otros"; // Nombre corregido
import CustomHeader2 from "../Components/CustomHeader2";

const OtrosStack = createNativeStackNavigator();

const OtrosStackScreen = () => {
    return (
        <OtrosStack.Navigator>
            <OtrosStack.Screen
                name="Otros1"
                component={Screen1Otros}
                options={({ navigation }) => ({
                    headerRight: () => <CustomHeader2 navigation={navigation} />
                })}
            />
            <OtrosStack.Screen name="Otros2" component={Screen2Otros} />
        </OtrosStack.Navigator>
    );
}

export default OtrosStackScreen;