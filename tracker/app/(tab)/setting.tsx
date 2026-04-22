import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>
      <Text style={styles.subtitle}>Manage your app preferences</Text>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>👤 Profile</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>🔒 Privacy</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </View>

      {/* App Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App</Text>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>🌙 Dark Mode</Text>
          <Text style={styles.status}>Off</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>🔔 Notifications</Text>
          <Text style={styles.status}>On</Text>
        </Pressable>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>❓ Help Center</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>

        <Pressable style={styles.item}>
          <Text style={styles.itemText}>📄 Terms & Privacy</Text>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>App Version 1.0.0</Text>
    </View>
  );
};

export default Setting;

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
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  itemText: {
    fontSize: 14,
    color: '#444',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
  status: {
    fontSize: 13,
    color: '#4f46e5',
    fontWeight: '500',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 12,
  },
});