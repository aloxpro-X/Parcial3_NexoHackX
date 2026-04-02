import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Operador NexoHackX</Text>
      <Text style={styles.email}>nexohackx@correo.com</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estado del perfil</Text>
        <Text style={styles.cardText}>Usuario activo en el sistema.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Especialidad</Text>
        <Text style={styles.cardText}>
          Tecnología, gadgets, setups hacker y accesorios.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nivel de acceso</Text>
        <Text style={styles.cardText}>Nexo Pro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    alignItems: "center",
    padding: 20,
    paddingTop: 36,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: "#00ff9f",
  },
  name: {
    fontSize: 24,
    fontWeight: "800",
    color: "#e2e8f0",
  },
  email: {
    fontSize: 16,
    color: "#94a3b8",
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#0d1324",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1a2940",
  },
  cardTitle: {
    color: "#00ff9f",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  cardText: {
    color: "#cbd5e1",
    lineHeight: 22,
  },
});