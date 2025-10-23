// screen/ProductDetailScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart, Product } from '../context/CartContext';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteParams = {
  ProductDetail: { product: Product };
};

const ProductDetailScreen = () => {
  const route = useRoute<RouteProp<RouteParams, 'ProductDetail'>>();
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      {/* Use product.image directly from your assets */}
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f6f7fb' },
  image: { width: '100%', height: 250, borderRadius: 8 },
  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
  price: { fontSize: 18, color: '#333', marginBottom: 20 },
  button: {
    backgroundColor: '#0a74da',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default ProductDetailScreen;
