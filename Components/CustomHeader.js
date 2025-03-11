import React from "react"; 
import { View, Button, StyleSheet } from "react-native"; 

const CustomHeader = ({ navigation }) => { 
    return ( 
        <View style={styles.container}> 
            <Button 
                title="Apartados" 
                onPress={() => navigation.navigate("Apartados")} 
            /> 
            <Button 
                title="Devolver" 
                onPress={() => navigation.navigate("Devolver")} 
            /> 
            <Button 
                title="Historial" 
                onPress={() => navigation.navigate("Historial")} 
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

export default CustomHeader;