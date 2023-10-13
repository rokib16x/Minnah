import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';

function FeedbackScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendFeedback = () => {
    const adminEmail = 'rokib@gmail.com';
    const subject = 'Feedback for Minnah App';
    const body = `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`;
    const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provide Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.feedbackInput}
        placeholder="Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
        <Text style={styles.sendButtonText}>Send Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  feedbackInput: {
    height: 120,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
