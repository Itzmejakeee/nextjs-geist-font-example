import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function DashboardScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.description}>
        Welcome to Shelf Life AI. Use the scanner to assess the freshness of your fruits and vegetables.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Scan" onPress={() => navigation.navigate('Scan')} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
