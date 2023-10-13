import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  const buttons = [
    {
      title: 'Al-Quran',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvG1BvIknjF1gfpbsqYzk2yKdZgRPosVBnA&usqp=CAU',
      navigateTo: 'QuranChapters',
    },

    {
      title: 'Asma Al Husna',
      imageUri: 'https://cdn.dribbble.com/users/153122/screenshots/2789346/asmaul-husna-1-10-1_still_2x.gif?resize=400x300&vertical=center',
      navigateTo: 'AsmaAlHusnaScreen',
    },
    {
      title: 'Mosque Near Me',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/1920px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg',
      navigateTo: 'MapScreen',
    },
    {
      title: 'Zakat Calculator',
      imageUri: 'https://www.islamic-relief.org.uk/wp-content/uploads/2022/11/zakat-rules-hero.jpg',
      navigateTo: 'ZakatCalculator',
    },
    {
      title: 'Tasbih',
      imageUri: 'https://img.freepik.com/premium-photo/photo-featuring-close-up-traditional-islamic-rosary-beads-tasbih_933496-20529.jpg',
      navigateTo: 'TasbihScreen',
    },

    {
      title: 'Salah Timing',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDbuPwg_AUUJcTg8lJb2oQ3Z_ffs1A_udCw&usqp=CAU',
      navigateTo: 'SalahTimingScreen', // Navigate to the new screen
    },
    {
      title: 'Donation',
      imageUri: 'https://img.freepik.com/premium-vector/donation-box-charity-concept-human-hands-putting-money-cash-love-heart-donation-box-together-helping-doing-charity-vector-illustration_140689-3158.jpg?w=2000',
      navigateTo: 'Payment',
    },
    {
      title: 'Game',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlMBAkcXjzrO0xGRsuu67nl9LXFsTqXs10Q&usqp=CAU', 
      navigateTo: 'Game', 
    },
    {
      title: 'Feedback',
      imageUri: 'https://d18891bkk3ccc2.cloudfront.net/wp-content/uploads/2021/09/08145124/SHO_BLOG_EEFGuideance_210908-01.jpg', 
      navigateTo: 'FeedbackScreen', 
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minnah</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(button.navigateTo)}
          >
            <ImageBackground
              source={{ uri: button.imageUri }}
              style={styles.buttonBackground}
              imageStyle={styles.buttonImage}
            >
              <Text style={styles.buttonText}>{button.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: '#333',
    fontSize: 64, // Increased font size for a stylish look
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 2, // Added a bit more shadow offset for depth
      height: 2,
    },
    textShadowRadius: 5, // Increased shadow radius for more prominence
    letterSpacing: 2, // Added letter spacing for a stylish effect
  },
  buttonContainer: {
    marginHorizontal: 16,
  },
  button: {
    height: 120,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  buttonImage: {
    resizeMode: 'contain',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',

  },
});

export default HomeScreen;