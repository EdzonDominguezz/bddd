import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1Otros from "../Screen1Otros";
import Screen2Otros from "../Screen2Otros";
import CustomHeader2 from "../../components/CustomHeader2";

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