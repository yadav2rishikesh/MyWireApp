// component/Card.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type CardProps = {
  title: string;
  price: number;
  image: any;
  onPress: () => void;
};

const Card = ({ title, price, image, onPress }: CardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.price}>₹{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    padding: 12,
    elevation: 2,
  },
  image: { width: '100%', height: 120, borderRadius: 6 },
  name: { fontSize: 14, fontWeight: 'bold', marginTop: 8 },
  price: { fontSize: 12, color: '#333', marginTop: 4 },
});

export default Card;
