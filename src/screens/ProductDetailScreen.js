import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function ProductDetailScreen({ route, cart, setCart }) {
  const { id, name, price, image, description, category } = route.params;

  const imageSource =
    typeof image === "string" ? { uri: image } : image;

  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
      Alert.alert("NexoHackX", "⚡ Cantidad aumentada en el carrito");
    } else {
      const newProduct = {
        id,
        name,
        price,
        image,
        quantity: 1,
      };

      setCart([...cart, newProduct]);
      Alert.alert("NexoHackX", "⚡ Producto agregado al sistema");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>{description}</Text>

        <TouchableOpacity style={styles.button} onPress={addToCart}>
          <Text style={styles.buttonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
  },
  category: {
    color: "#38bdf8",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e2e8f0",
  },
  price: {
    fontSize: 22,
    color: "#00ff9f",
    marginTop: 10,
    fontWeight: "700",
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    color: "#94a3b8",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#00ff9f",
    padding: 15,
    borderRadius: 12,
    marginTop: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#03120c",
    fontSize: 16,
    fontWeight: "800",
  },
});