import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OffersScreen from "../screens/OffersScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ cart, setCart }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#081120" },
        headerTintColor: "#00ff9f",
        contentStyle: { backgroundColor: "#050816" },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Catálogo" }}
      />
      <Stack.Screen
        name="ProductDetail"
        options={{ title: "Detalle del producto" }}
      >
        {(props) => (
          <ProductDetailScreen {...props} cart={cart} setCart={setCart} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [cart, setCart] = useState([]);
  const [activeOffer, setActiveOffer] = useState(null);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "#081120" },
          headerTintColor: "#00ff9f",
          sceneStyle: { backgroundColor: "#050816" },
          tabBarStyle: {
            backgroundColor: "#081120",
            borderTopColor: "#132033",
            height: 64,
            paddingBottom: 6,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 12,
          },
          tabBarActiveTintColor: "#00ff9f",
          tabBarInactiveTintColor: "#6b7c93",
          tabBarIcon: ({ color, size }) => {
            let iconName = "ellipse";

            if (route.name === "Inicio") iconName = "home";
            if (route.name === "Ofertas") iconName = "flash";
            if (route.name === "Carrito") iconName = "cart";
            if (route.name === "Perfil") iconName = "person";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio">
          {() => <HomeStack cart={cart} setCart={setCart} />}
        </Tab.Screen>

        <Tab.Screen name="Ofertas">
          {(props) => (
            <OffersScreen
              {...props}
              activeOffer={activeOffer}
              setActiveOffer={setActiveOffer}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Carrito">
          {(props) => (
            <CartScreen
              {...props}
              cart={cart}
              setCart={setCart}
              activeOffer={activeOffer}
              setActiveOffer={setActiveOffer}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}