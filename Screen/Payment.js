// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const PaymentGatewayScreen = () => {
//     const navigation = useNavigation();
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiration, setExpiration] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [amount, setAmount] = useState('');
//   const [paymentResult, setPaymentResult] = useState('');

//   const processPayment = () => {
//     // Simulate payment processing
//     const success = Math.random() < 0.8; // 80% success rate

//     setPaymentResult(
//       success
//         ? `Payment successful! Amount: $${amount}`
//         : 'Payment failed. Please try again.'
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Pay to MINNAH</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Card Number"
//         value={cardNumber}
//         onChangeText={setCardNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Expiration Date (MM/YY)"
//         value={expiration}
//         onChangeText={setExpiration}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="CVV"
//         value={cvv}
//         onChangeText={setCvv}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Amount"
//         value={amount}
//         onChangeText={setAmount}
//         keyboardType="numeric"
//       />
//       <Button title="Pay Now" onPress={processPayment} />
//       <ImageBackground
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/018/904/109/original/popular-online-payment-methods-logo-with-white-background-transparent-with-logotype-gateway-icon-set-for-website-free-vector.jpg' }}
//             style={styles.buttonBackground}
//             imageStyle={{ resizeMode: 'contain' }}
//           >
//           </ImageBackground>

//       <Text style={styles.result}>{paymentResult}</Text>

//       <TouchableOpacity
//           style={[{ backgroundColor: '#B5C7E6', marginBottom: 10, }]}
//           onPress={() => navigation.navigate('Donation')}
//         >
//           <Text style={styles.buttonText}>I Want to Donate Others</Text>
//         </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f4f4',
//   },
//   heading: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//     padding: 10,
//   },
//   result: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'green',
//   },
//   buttonBackground: {
//     flex: 2,
//     justifyContent: 'space-around',
//     padding: 200,
//   },
// });

// // export default PaymentGatewayScreen;
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const PaymentGatewayScreen = () => {
//     const navigation = useNavigation();
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiration, setExpiration] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [amount, setAmount] = useState('');
//   const [paymentResult, setPaymentResult] = useState('');

//   const processPayment = () => {

//     const success = Math.random() < 0.8; // 80% success rate

//     setPaymentResult(
//       success
//         ? `Payment successful! Amount: $${amount}`
//         : 'Payment failed. Please try again.'
//     );

//     // Clear the input fields
//     setCardNumber('');
//     setExpiration('');
//     setCvv('');
//     setAmount('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Pay to MINNAH</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Card Number"
//         value={cardNumber}
//         onChangeText={setCardNumber}
//         autoFocus={true}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Expiration Date (MM/YY)"
//         value={expiration}
//         onChangeText={setExpiration}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="CVV"
//         value={cvv}
//         onChangeText={setCvv}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Amount"
//         value={amount}
//         onChangeText={setAmount}
//         keyboardType="numeric"
//       />
//       <Button title="Pay Now" onPress={processPayment} />

//       <Text style={styles.result}>{paymentResult}</Text>

//       <TouchableOpacity
//           style={[{ backgroundColor: '#B5C7E6', marginBottom: 10, }]}
//           onPress={() => navigation.navigate('Donation')}
//         >
//           <Text style={styles.buttonText}>I Want to Donate Others</Text>
//         </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#f4f4f4',
//   },
//   heading: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//     padding: 10,
//   },
//   result: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'green',
//   },
//   buttonBackground: {
//     flex: 2,
//     justifyContent: 'space-around',
//     padding: 200,
//   },
// });

// export default PaymentGatewayScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentGatewayScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentResult, setPaymentResult] = useState('');

  const processPayment = () => {

     // Check if any of the required fields are empty
    if (!cardNumber || !expiration || !cvv || !amount) {
    setPaymentResult('Please provide all required information.');
    return;
  }
    // Simulate payment processing
    const success = Math.random() < 0.8; // 80% success rate

    setPaymentResult(
      success
        ? `Payment successful! Amount: $${amount}`
        : 'Payment failed. Please try again.'
    );

    // Clear input fields on payment
    setCardNumber('');
    setExpiration('');
    setCvv('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pay to MINNAH</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiration Date (MM/YY)"
        value={expiration}
        onChangeText={setExpiration}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Pay Now" onPress={processPayment} />

      <ImageBackground
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/018/904/109/original/popular-online-payment-methods-logo-with-white-background-transparent-with-logotype-gateway-icon-set-for-website-free-vector.jpg',
        }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      ></ImageBackground>


      <Text style={styles.result}>{paymentResult}</Text>

      <TouchableOpacity
        style={[{ backgroundColor: '#B5C7E6', marginBottom: 20,padding:10, justifyContent:'flex-end' }]}
        onPress={() => navigation.navigate('Donation')}
      >
        <Text style={styles.buttonText}>I Want to Donate Others</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',

  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },

  imageBackground: {
    width: '100%',
    height: 150,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 18,
    fontStyle:'italic',
    fontWeight:'900',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    
  },
});

export default PaymentGatewayScreen;
