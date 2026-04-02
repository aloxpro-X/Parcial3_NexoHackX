import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function ProductListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de productos</Text>
      <Text style={styles.subtitle}>
        Explora módulos y accesorios de NexoHackX
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            category={item.category}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#00ff9f",
    marginTop: 20,
    marginLeft: 20,
  },
  subtitle: {
    color: "#8ca3c7",
    marginLeft: 20,
    marginTop: 6,
    marginBottom: 6,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 24,
  },
});