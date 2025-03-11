import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { auth } from './config_firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './screens/ScreenLogin';
import TabsNavigator from './stacks/TabsNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Usuario autenticado", user);
      setUser(user);
      setLoading(false);
    }, (error) => {
      console.error("Error en la autenticación:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "TabsNavigator" : "ScreenLogin"}>
        <Stack.Screen
          name="ScreenLogin"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});