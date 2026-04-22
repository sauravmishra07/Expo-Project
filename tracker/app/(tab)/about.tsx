import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>

      <Text style={styles.description}>
        This is a simple demo application built using React Native and Expo.
        It helps you learn navigation, tabs, and UI building in a clean way.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Features</Text>
        <Text style={styles.cardText}>• Simple Navigation</Text>
        <Text style={styles.cardText}>• Tab Layout</Text>
        <Text style={styles.cardText}>• Clean UI Components</Text>
      </View>

      <Text style={styles.footer}>Made with ❤️ using Expo</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#111',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
  },
});