import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>🏠 Home</Text>
      <Text style={styles.subtitle}>Welcome back, friend 👋</Text>

      {/* Hero Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Get Started</Text>
        <Text style={styles.cardText}>
          Explore the app, check features, and start building amazing things with React Native + Expo.
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore Now</Text>
        </Pressable>
      </View>

      {/* Feature Cards */}
      <View style={styles.featureRow}>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>⚡ Fast</Text>
          <Text style={styles.featureText}>Smooth performance</Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>🎨 UI</Text>
          <Text style={styles.featureText}>Clean design</Text>
        </View>
      </View>

      <View style={styles.featureCardFull}>
        <Text style={styles.featureTitle}>📱 Cross Platform</Text>
        <Text style={styles.featureText}>
          Works on Android, iOS, and Web using Expo
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f7fb',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    elevation: 2,
  },
  featureCardFull: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 13,
    color: '#666',
  },
});