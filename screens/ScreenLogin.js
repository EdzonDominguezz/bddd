import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import appFirebase from "../config_firebase";

const auth = getAuth(appFirebase);

export default function ScreenLogin() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = async () => {
        setErrorMessage("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Bienvenido!", "Inicio de sesión exitoso");

            // Redirigir y limpiar historial de navegación
            navigation.reset({
                index: 0,
                routes: [{ name: "TabsNavigator" }],
            });
        } catch (error) {
            console.error(error);
            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/wrong-password" ||
                error.code === "auth/user-not-found"
            ) {
                setErrorMessage("Correo o contraseña incorrectos.");
            } else {
                setErrorMessage("Ocurrió un error. Inténtalo de nuevo.");
            }
        }
    };

    const registrar = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Cuenta creada', 'La cuenta se ha creado correctamente. Inicia sesión.');
            navigation.navigate("ScreenLogin");
        } catch (error) {
            console.error("Error al crear cuenta:", error);
            if (error.code === "auth/email-already-in-use") {
                Alert.alert('Error', 'El correo electrónico ya está en uso.');
            } else if (error.code === "auth/weak-password") {
                Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
            } else {
                Alert.alert('Error', 'Ocurrió un error al registrar la cuenta.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imagen} source={require("../assets/LogoNutriSync.png")} />
            <Text style={styles.title}>Login</Text>

            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#8B8B8B"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#8B8B8B"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                />

                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
                </TouchableOpacity>

                <View style={styles.registrationContainer}>
                    <Text style={styles.textGray}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity onPress={registrar}>
                        <Text style={styles.textOrange}>Regístrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5F8",
    },
    imagen: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#D63384",
        marginBottom: 20,
        fontFamily: "serif",
    },
    card: {
        width: "85%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        width: "100%",
        height: 45,
        borderBottomWidth: 2,
        borderBottomColor: "#D63384",
        marginBottom: 20,
        fontSize: 16,
        color: "#333",
        textAlign: "center",
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        fontSize: 14,
    },
    button: {
        backgroundColor: "#D63384",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    registrationContainer: {
        marginTop: 15,
        alignItems: "center",
    },
    textGray: {
        fontSize: 12,
        color: 'gray',
        fontWeight: '600',
    },
    textOrange: {
        fontSize: 12,
        color: 'orange',
        fontWeight: '600',
        marginTop: 5,
    },
});