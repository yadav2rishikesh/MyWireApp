// component/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: (e?: GestureResponderEvent) => void;
  color?: string;
  disabled?: boolean;        // boolean prop
  style?: ViewStyle;
};

export default function Button({ title, onPress, color = '#007bff', disabled = false, style }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, opacity: disabled ? 0.6 : 1 }, style]}
      onPress={onPress}
      disabled={disabled}    // passed as boolean
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
