import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({
  id,
  name,
  price,
  image,
  description,
  category,
  navigation,
}) {
  const imageSource =
    typeof image === "string" ? { uri: image } : image;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.88}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          id,
          name,
          price,
          image,
          description,
          category,
        })
      }
    >
      <Image source={imageSource} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0d1324",
    borderRadius: 18,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1a2940",
    shadowColor: "#00ff9f",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 14,
  },
  category: {
    color: "#38bdf8",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#e2e8f0",
  },
  productPrice: {
    fontSize: 16,
    color: "#00ff9f",
    marginTop: 6,
    fontWeight: "800",
  },
});