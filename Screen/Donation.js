import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DonationButton = ({ url, title, logoUrl }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('WebViewScreen', { url });
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.buttonStyle} activeOpacity={.5}>
                <Image source={{ uri: logoUrl }} style={styles.buttonImageIconStyle} />
                <Text style={styles.buttonTextStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'column',
      marginVertical: 15,
      marginHorizontal: 15,
      alignSelf: 'stretch',
      flex: 2,
    },
    buttonStyle: {
      backgroundColor: '#9ABDDE',
      paddingVertical: '2%',
      paddingHorizontal: '5%',
      borderRadius: 25,
      alignSelf: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      marginHorizontal: '5%',
      height: 200,
      width: 300,
      resizeMode: 'contain',
    },
    buttonTextStyle: {
      color: '#265073',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    buttonImageIconStyle: {
      padding: 5,
      margin: 5,
      alignSelf: 'center',
      flex: 1,
      height: 150,
      width: 195,
      resizeMode: 'contain',
    },
  });
  

export default DonationButton;
