import React from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity, Image } from "react-native";
import { auth } from "../config_firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const CerrarSesionScreen = () => { 
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Sesión cerrada correctamente");
            Alert.alert("Sesión Cerrada", "Has cerrado sesión exitosamente");

            // Redirigir al usuario a la pantalla de Login y limpiar historial de navegación
            navigation.reset({
                index: 0,
                routes: [{ name: "ScreenLogin" }],
            });
        } catch (error) {
            console.error("Error cerrando sesión:", error);
            Alert.alert("Error", "No se pudo cerrar la sesión");
        }
    };

    return (
        <View style={styles.container}>
            {/* Imagen decorativa */}
            <Image source={require("../assets/favicon.png")} style={styles.image} />

            <Text style={styles.title}>Cerrar Sesión</Text>
            <Text style={styles.subtitle}>¿Estás segura de que deseas salir?</Text>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>

            {/* Botón de Cancelar */}
            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CerrarSesionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF5F8", // Fondo en color pastel romántico
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#D63384", // Un rosa elegante
        marginBottom: 10,
        fontFamily: "serif",
    },
    subtitle: {
        fontSize: 18,
        color: "#8B8B8B",
        marginBottom: 20,
        textAlign: "center",
    },
    logoutButton: {
        backgroundColor: "#D63384", // Rosa elegante
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    logoutText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    cancelButton: {
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#D63384",
    },
    cancelText: {
        color: "#D63384",
        fontSize: 18,
        fontWeight: "bold",
    },
});