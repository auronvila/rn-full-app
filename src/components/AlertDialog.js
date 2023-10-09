import React from 'react';
import {Button, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants';

export default function AlertDialog(props) {
  const {message, onClose} = props;

  const isVisible = message !== '';

  return (
    <Modal
      presentationStyle={'pageSheet'}
      animationType={'slide'}
      visible={isVisible}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Warning!</Text>
        <Text>{message}</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={onClose}><Text>Close</Text></TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
    backgroundColor: COLORS.warning
  },
  buttonStyle: {
    margin: 16,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  headerText: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
});
