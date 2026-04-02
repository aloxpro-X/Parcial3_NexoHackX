import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import offers from "../data/offers";

export default function OffersScreen({ activeOffer, setActiveOffer }) {
  const activateOffer = (offer) => {
    setActiveOffer(offer);
    Alert.alert(
      "NexoHackX",
      `⚡ Oferta activada: ${offer.title}\nCódigo: ${offer.code}`
    );
  };

  const removeOffer = () => {
    setActiveOffer(null);
    Alert.alert("NexoHackX", "Promo desactivada correctamente.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas</Text>
      <Text style={styles.subtitle}>Promociones activas de NexoHackX</Text>

      {activeOffer && (
        <View style={styles.activeOfferBox}>
          <Text style={styles.activeOfferTitle}>Promo activa</Text>
          <Text style={styles.activeOfferText}>
            {activeOffer.title} - {activeOffer.discountValue}% OFF
          </Text>

          <TouchableOpacity style={styles.removeButton} onPress={removeOffer}>
            <Text style={styles.removeButtonText}>Desactivar promo</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = activeOffer?.id === item.id;

          return (
            <View style={[styles.offerCard, isActive && styles.activeCard]}>
              <Text style={styles.offerTitle}>{item.title}</Text>
              <Text style={styles.offerDescription}>{item.description}</Text>
              <Text style={styles.offerCode}>Código: {item.code}</Text>

              <TouchableOpacity
                style={[styles.button, isActive && styles.activeButton]}
                onPress={() => activateOffer(item)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isActive && styles.activeButtonText,
                  ]}
                >
                  {isActive ? "Promo activada" : "Activar promo"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 16,
  },
  title: {
    color: "#00ff9f",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 4,
  },
  subtitle: {
    color: "#8ca3c7",
    marginBottom: 16,
  },
  activeOfferBox: {
    backgroundColor: "#0d1324",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#00ff9f",
  },
  activeOfferTitle: {
    color: "#00ff9f",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  activeOfferText: {
    color: "#e2e8f0",
    marginBottom: 12,
  },
  removeButton: {
    backgroundColor: "#132033",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  removeButtonText: {
    color: "#ff7b9c",
    fontWeight: "800",
  },
  listContent: {
    paddingBottom: 20,
  },
  offerCard: {
    backgroundColor: "#0d1324",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1a2940",
  },
  activeCard: {
    borderColor: "#00ff9f",
  },
  offerTitle: {
    color: "#e2e8f0",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
  },
  offerDescription: {
    color: "#94a3b8",
    lineHeight: 22,
    marginBottom: 10,
  },
  offerCode: {
    color: "#00ff9f",
    fontWeight: "700",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#00ff9f",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#1e293b",
  },
  buttonText: {
    color: "#03120c",
    fontWeight: "800",
    fontSize: 15,
  },
  activeButtonText: {
    color: "#e2e8f0",
  },
});