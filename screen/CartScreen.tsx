// screen/CartScreen.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name} x {item.quantity}</Text>
              <Text style={styles.price}>₹{item.price * item.quantity}</Text>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.remove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <Text style={styles.total}>Total: ₹{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  name: { fontSize: 16 },
  price: { fontSize: 16 },
  remove: { color: 'red' },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 16, textAlign: 'right' },
});

export default CartScreen;
