// screen/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Card from '../component/Card';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/Button';

// Local product list — use require to include images
const PRODUCTS = [
  { id: '1', name: 'Wire 1 - Copper 1.5mm', price: 120, image: require('../asset/wire1.png') },
  { id: '2', name: 'Wire 2 - Copper 2.5mm', price: 180, image: require('../asset/wire2.png') },
  { id: '3', name: 'Wire 3 - Multicore 4mm', price: 240, image: require('../asset/wire3.png') },
  { id: '4', name: 'Wire 4 - Shielded 1.5mm', price: 150, image: require('../asset/wire4.png') },
  { id: '5', name: 'Wire 5 - Flexible 2mm', price: 210, image: require('../asset/wire5.png') },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const renderItem = ({ item }: { item: typeof PRODUCTS[number] }) => (
    <Card
      title={item.name}
      price={item.price}
      image={item.image}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    />
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wire App</Text>
        <Text style={styles.headerSub}>Lightweight prototype</Text>
      </View>

      <View style={styles.actions}>
        <Button title="Refresh" onPress={() => {}} color="#0A4D68" disabled={false} />
        <View style={{ width: 10 }} />
        <Button title="Contact" onPress={() => {}} color="#28a745" />
      </View>

      <Text style={styles.sectionTitle}>Products</Text>

      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f6f7fb' },
  header: { padding: 16, backgroundColor: '#0A4D68', borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  headerSub: { color: '#dfeff4', fontSize: 12, marginTop: 4 },
  actions: { flexDirection: 'row', padding: 12, justifyContent: 'flex-start' },
  sectionTitle: { marginLeft: 12, marginTop: 6, fontSize: 18, fontWeight: '700', color: '#222' },
  list: { paddingHorizontal: 8, paddingBottom: 20, paddingTop: 8 },
});
