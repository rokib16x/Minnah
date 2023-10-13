import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

function AsmaAlHusnaScreen() {
  const [asmaAlHusnaData, setAsmaAlHusnaData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchAsmaAlHusna();
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setFilteredData(asmaAlHusnaData);
    } else {
      const filtered = asmaAlHusnaData.filter(
        (nameData) => nameData.number.toString().includes(searchText)
      );
      setFilteredData(filtered);
    }
  }, [searchText, asmaAlHusnaData]);

  const fetchAsmaAlHusna = async () => {
    try {
      const response = await axios.get(
        'http://api.aladhan.com/v1/asmaAlHusna/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99'
      );

      if (response.data && response.data.data) {
        setAsmaAlHusnaData(response.data.data);
        setFilteredData(response.data.data);
      } else {
        console.error('No data received from the API');
      }
    } catch (error) {
      console.error('Error fetching Asma Al Husna:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by number"
        value={searchText}
        onChangeText={setSearchText}
      />
      {filteredData.map((nameData) => (
        <View key={nameData.number} style={styles.nameContainer}>
          <Text style={[styles.text, styles.name]}>{nameData.name}</Text>
          <Text style={[styles.text, styles.transliteration]}>{nameData.transliteration}</Text>
          <Text style={[styles.text, styles.number]}>Number: {nameData.number}</Text>
          <Text style={[styles.text, styles.meaning]}>Meaning: {nameData.en?.meaning || 'Meaning not available'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  nameContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    color: '#8B4513', // Set text color to dark brown
    // Keep the previous font family here
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  transliteration: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  number: {
    fontSize: 16,
  },
  meaning: {
    marginTop: 10,
  },
});

export default AsmaAlHusnaScreen;
