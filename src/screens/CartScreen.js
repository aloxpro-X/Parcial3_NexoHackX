import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({
  cart,
  setCart,
  activeOffer,
  setActiveOffer,
}) {
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  let discountAmount = 0;

  if (activeOffer && activeOffer.discountType === "percentage") {
    discountAmount = subtotal * (activeOffer.discountValue / 100);
  }

  const finalTotal = subtotal - discountAmount;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito</Text>
      <Text style={styles.subtitle}>Gestiona tus módulos agregados</Text>

      {activeOffer && (
        <View style={styles.promoBox}>
          <Text style={styles.promoTitle}>Promo aplicada</Text>
          <Text style={styles.promoText}>
            {activeOffer.title} - {activeOffer.discountValue}% de descuento
          </Text>

          <TouchableOpacity
            style={styles.promoButton}
            onPress={() => setActiveOffer(null)}
          >
            <Text style={styles.promoButtonText}>Quitar promo</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const imageSource =
            typeof item.image === "string" ? { uri: item.image } : item.image;

          return (
            <View style={styles.itemCard}>
              <Image source={imageSource} style={styles.itemImage} />

              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>

                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => decreaseQuantity(item.id)}
                  >
                    <Text style={styles.qtyButtonText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantityText}>
                    Cantidad: {item.quantity}
                  </Text>

                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => increaseQuantity(item.id)}
                  >
                    <Text style={styles.qtyButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeItem(item.id)}
              >
                <Ionicons name="trash" size={20} color="#ff5c7a" />
              </TouchableOpacity>
            </View>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay productos en el carrito.</Text>
        }
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <Text style={styles.summaryText}>Subtotal: ${subtotal.toFixed(2)}</Text>

        {activeOffer ? (
          <Text style={styles.discountText}>
            Descuento ({activeOffer.title}): -${discountAmount.toFixed(2)}
          </Text>
        ) : (
          <Text style={styles.noDiscountText}>Descuento: $0.00</Text>
        )}

        <Text style={styles.total}>Total final: ${finalTotal.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => {
            setCart([]);
            setActiveOffer(null);
          }}
        >
          <Text style={styles.clearButtonText}>Vaciar carrito</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: "800",
    color: "#00ff9f",
    marginBottom: 4,
  },
  subtitle: {
    color: "#8ca3c7",
    marginBottom: 14,
  },
  promoBox: {
    backgroundColor: "#0d1324",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#00ff9f",
  },
  promoTitle: {
    color: "#00ff9f",
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 4,
  },
  promoText: {
    color: "#e2e8f0",
    marginBottom: 10,
  },
  promoButton: {
    backgroundColor: "#132033",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  promoButtonText: {
    color: "#ff7b9c",
    fontWeight: "800",
  },
  listContent: {
    paddingBottom: 20,
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#0d1324",
    borderRadius: 16,
    marginBottom: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1a2940",
    alignItems: "center",
  },
  itemImage: {
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  itemInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  itemName: {
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: "700",
  },
  itemPrice: {
    color: "#00ff9f",
    marginTop: 6,
    fontSize: 15,
    fontWeight: "700",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 8,
  },
  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#132033",
    justifyContent: "center",
    alignItems: "center",
  },
  qtyButtonText: {
    color: "#00ff9f",
    fontSize: 18,
    fontWeight: "800",
  },
  quantityText: {
    color: "#cbd5e1",
    fontWeight: "600",
  },
  deleteButton: {
    paddingHorizontal: 14,
  },
  emptyText: {
    textAlign: "center",
    color: "#94a3b8",
    marginTop: 60,
    fontSize: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#1a2940",
    paddingTop: 14,
  },
  summaryText: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 6,
  },
  discountText: {
    color: "#ff7b9c",
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "700",
  },
  noDiscountText: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 6,
  },
  total: {
    color: "#e2e8f0",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },
  clearButton: {
    backgroundColor: "#00ff9f",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#03120c",
    fontSize: 16,
    fontWeight: "800",
  },
});
