import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ManageSchedulesScreen = () => {
  const [pickupSchedule, setPickupSchedule] = useState('');
  const [deliverySchedule, setDeliverySchedule] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    // Implement save logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Schedules</Text>
      <TextInput
        style={styles.input}
        placeholder="Pickup Schedule"
        value={pickupSchedule}
        onChangeText={setPickupSchedule}
        placeholderTextColor="#AAAAAA"
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Schedule"
        value={deliverySchedule}
        onChangeText={setDeliverySchedule}
        placeholderTextColor="#AAAAAA"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        placeholderTextColor="#AAAAAA"
      />
      <Button title="Save" onPress={handleSave} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    color: '#333333',
  },
});

export default ManageSchedulesScreen;
