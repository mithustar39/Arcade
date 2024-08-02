import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ManageProductsScreen = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    setProducts([...products, { name: productName, price: productPrice }]);
    setProductName('');
    setProductPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Products</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
        placeholderTextColor="#AAAAAA"
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={productPrice}
        onChangeText={setProductPrice}
        placeholderTextColor="#AAAAAA"
      />
      <Button title="Add Product" onPress={handleAddProduct} color="#4CAF50" />
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.productText}>Name: {item.name}</Text>
            <Text style={styles.productText}>Price: {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 10,
  },
  productText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default ManageProductsScreen;
