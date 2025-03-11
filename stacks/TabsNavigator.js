import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Para crear las 3 pestañas entre los stacks
import ProyectorStackScreen from "./ProyectorStackScreen";
import OtrosStackScreen from "./OtrosStackScreen";
import CerrarSesionScreen from "../CerrarSesionScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  // Mapeo de íconos
  const iconMap = {
    Proyector: { focused: "image", outline: "image-outline" },
    Otros: { focused: "book", outline: "book-outline" },
    "Cerrar Sesion": { focused: "log-out", outline: "log-out-outline" },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = iconMap[route.name][focused ? "focused" : "outline"];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato", // Color activo
        tabBarInactiveTintColor: "gray", // Color inactivo
      })}
    >
      <Tab.Screen
        name="Proyector"
        component={ProyectorStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Otros"
        component={OtrosStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cerrar Sesion"
        component={CerrarSesionScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;