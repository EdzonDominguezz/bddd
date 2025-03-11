import React from "react"; 
import { View, Button, StyleSheet } from "react-native"; 
import Screen1Otros from "screens/Screen1Otros";
import Screen2Otros from "screens/Screen2Otros"; 

const CustomHeader2 = ({ navigation }) => { 
    return ( 
        <View style={styles.container}> 
            <Button 
                title="Scr1" 
                onPress={() => navigation.navigate("Otros1")} 
            /> 
            <Button 
                title="Scr2" 
                onPress={() => navigation.navigate("Otros2")} 
            /> 
        </View> 
    ); 
}; 

const styles = StyleSheet.create({ 
    container: { 
        flexDirection: "row", 
        justifyContent: "space-around", 
        paddingHorizontal: 10, 
    }, 
}); 
export default CustomHeader2;