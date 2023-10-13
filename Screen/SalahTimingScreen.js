import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SalahTimingScreen = () => {
  const salahTimings = [
    { name: 'Fajr', time: '4:30 AM' },
    { name: 'Dhuhr', time: '12:30 PM' },
    { name: 'Asr', time: '3:45 PM' },
    { name: 'Maghrib', time: '6:15 PM' },
    { name: 'Isha', time: '8:00 PM' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salah Timings</Text>
      {salahTimings.map((salah, index) => (
        <View key={index} style={styles.salahContainer}>
          <Text style={styles.salahName}>{salah.name}</Text>
          <Text style={styles.salahTime}>{salah.time}</Text>
        </View>
      ))}
      <Text style={styles.hadithText}>
        Narrated Abu Huraira: I heard Allah's Messenger (ﷺ) saying, "If there was a river at the door of anyone of you and he took a bath in it five times a day would you notice any dirt on him?" They said, "Not a trace of dirt would be left." The Prophet (ﷺ) added, "That is the example of the five prayers with which Allah blots out (annuls) evil deeds."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  salahContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  salahName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  salahTime: {
    fontSize: 18,
  },
  hadithText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default SalahTimingScreen;
