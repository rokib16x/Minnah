import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const ZakatCalculator = () => {
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [cash, setCash] = useState('');
  const [investments, setInvestments] = useState('');
  const [otherAssets, setOtherAssets] = useState('');
  const [liabilities, setLiabilities] = useState('');
  const [zakatAmount, setZakatAmount] = useState(0);

  const calculateZakat = () => {
    const nisab = 48132; // Nisab amount according to silver price for 612.36 grams in 2023
    const zakatableAssets = Number(gold) * 5175 + Number(silver) * 78.6 + Number(cash) + Number(investments) + Number(otherAssets);
    const netAssets = zakatableAssets - Number(liabilities);
    let zakat;
    if (netAssets < nisab) {
      Alert.alert('You are not eligible to pay Zakat.');
    } else {
      zakat = netAssets * 0.025;
    }
    setZakatAmount(parseFloat(zakat).toFixed(2));
  };

  const resetHandler = () => {
    setGold('');
    setSilver('');
    setCash('');
    setInvestments('');
    setOtherAssets('');
    setLiabilities('');
    setZakatAmount('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gradientBackground}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Gold (grams):</Text>
          <TextInput
            style={styles.input}
            value={gold}
            keyboardType="numeric"
            onChangeText={setGold}
          />
          <Text style={styles.label}>Silver (grams):</Text>
          <TextInput
            style={styles.input}
            value={silver}
            keyboardType="numeric"
            onChangeText={setSilver}
          />
          <Text style={styles.label}>Cash (BDT):</Text>
          <TextInput
            style={styles.input}
            value={cash}
            keyboardType="numeric"
            onChangeText={setCash}
          />
          <Text style={styles.label}>Investments (BDT):</Text>
          <TextInput
            style={styles.input}
            value={investments}
            keyboardType="numeric"
            onChangeText={setInvestments}
          />
          <Text style={styles.label}>Other Assets (BDT):</Text>
          <TextInput
            style={styles.input}
            value={otherAssets}
            keyboardType="numeric"
            onChangeText={setOtherAssets}
          />
          <Text style={styles.label}>Liabilities (BDT):</Text>
          <TextInput
            style={styles.input}
            value={liabilities}
            keyboardType="numeric"
            onChangeText={setLiabilities}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={calculateZakat}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={resetHandler}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.result}>Zakat Amount: {zakatAmount}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2ECD8', // Light beige background color
    borderRadius: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default ZakatCalculator;
