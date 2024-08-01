import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Happiness Farms</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Business"
          onPress={() => navigation.navigate('Business')}
          color="#4CAF50"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="User"
          onPress={() => navigation.navigate('Login')}
          color="#4CAF50"
        />
      </View>
       <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#4CAF50',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
