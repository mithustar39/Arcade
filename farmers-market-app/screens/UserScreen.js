import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserScreen = () => {
  const [preorder, setPreorder] = useState('');
  const [location, setLocation] = useState('');
  const [wishlist, setWishlist] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeframes, setTimeframes] = useState('');

  const handleSubmit = () => {
    console.log({ preorder, location, wishlist, feedback, timeframes });
    // Add logic to handle user form submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User</Text>
      <TextInput
        style={styles.input}
        placeholder="Preorder"
        value={preorder}
        onChangeText={setPreorder}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Wishlist"
        value={wishlist}
        onChangeText={setWishlist}
      />
      <TextInput
        style={styles.input}
        placeholder="Customer Feedback"
        value={feedback}
        onChangeText={setFeedback}
      />
      <TextInput
        style={styles.input}
        placeholder="Timeframes"
        value={timeframes}
        onChangeText={setTimeframes}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default UserScreen;
