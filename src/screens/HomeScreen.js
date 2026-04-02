import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import products from "../data/products";

export default function HomeScreen({ navigation }) {
  const featuredProducts = products.filter((item) => item.featured).slice(0, 2);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.logoMark}>NexoHackX</Text>
        <Text style={styles.subtitle}>
          Tecnología, hacking y cosmos conectados en una sola experiencia.
        </Text>
      </View>

      <Image
        source={require("../../assets/home/banner1.jpg")}
        style={styles.banner}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Sistema activo</Text>
        <Text style={styles.infoText}>
          Explora gadgets, periféricos y módulos diseñados para una estación de
          trabajo futurista.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Productos destacados</Text>

      <View style={styles.productsPreview}>
        {featuredProducts.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardSub}>${product.price}</Text>
          </View>
        ))}
      </View>

      <Image
        source={require("../../assets/home/banner2.jpg")}
        style={styles.banner}
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Modo Nexo</Text>
        <Text style={styles.infoText}>
          Descubre promociones especiales, arma tu carrito y personaliza tu
          entorno con estética hacker-cósmica.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={styles.buttonText}>Ver catálogo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
  },
  hero: {
    paddingTop: 28,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  logoMark: {
    color: "#00ff9f",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
    maxWidth: 320,
  },
  banner: {
    width: "90%",
    height: 190,
    alignSelf: "center",
    borderRadius: 18,
    marginTop: 20,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#e2e8f0",
    marginLeft: 20,
    marginTop: 28,
  },
  productsPreview: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 18,
    paddingHorizontal: 10,
  },
  productCard: {
    width: 150,
    minHeight: 120,
    backgroundColor: "#0d1324",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1a2940",
    padding: 12,
  },
  cardTitle: {
    color: "#e2e8f0",
    fontWeight: "800",
    fontSize: 15,
    textAlign: "center",
  },
  cardSub: {
    color: "#00ff9f",
    marginTop: 6,
    fontWeight: "700",
  },
  infoBox: {
    marginTop: 18,
    marginHorizontal: 20,
    backgroundColor: "#0d1324",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1a2940",
  },
  infoTitle: {
    color: "#00ff9f",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  infoText: {
    color: "#94a3b8",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#00ff9f",
    margin: 20,
    marginTop: 24,
    marginBottom: 30,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#03120c",
    fontSize: 16,
    fontWeight: "800",
  },
});