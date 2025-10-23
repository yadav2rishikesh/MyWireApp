// screen/AccountScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Account</Text>
    <Text style={{ marginTop: 20 }}>User info and settings go here</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
});

export default AccountScreen;
