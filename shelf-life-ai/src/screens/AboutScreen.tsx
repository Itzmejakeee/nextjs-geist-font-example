import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const storageTips = {
  Apple: 'Store apples in a cool, dark place or in the refrigerator to extend shelf life.',
  Banana: 'Keep bananas at room temperature and away from direct sunlight.',
  Orange: 'Store oranges in a cool, dry place or in the refrigerator.',
  Papaya: 'Keep papayas at room temperature until ripe, then refrigerate.',
  Mango: 'Store mangoes at room temperature until ripe, then refrigerate.',
  Eggplant: 'Keep eggplants in a cool place but avoid refrigeration if possible.',
  Okra: 'Store okra in a paper bag in the refrigerator to keep it fresh.',
  Tomato: 'Keep tomatoes at room temperature away from direct sunlight.',
  Chayote: 'Store chayote in a cool, dry place or in the refrigerator.',
  Ampalaya: 'Keep ampalaya in the refrigerator wrapped in a paper towel.'
};

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Shelf Life AI</Text>
      <Text style={styles.description}>
        Shelf Life AI uses advanced AI image recognition technology to assess the freshness and shelf life of fruits and vegetables in real-time.
      </Text>
      <Text style={styles.subtitle}>Storage Tips</Text>
      {Object.entries(storageTips).map(([produce, tip]) => (
        <View key={produce} style={styles.tipContainer}>
          <Text style={styles.produce}>{produce}</Text>
          <Text style={styles.tip}>{tip}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  tipContainer: {
    marginBottom: 15,
  },
  produce: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tip: {
    fontSize: 16,
    color: '#ccc',
  },
});
