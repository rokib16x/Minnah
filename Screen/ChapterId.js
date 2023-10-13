
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View,ScrollView } from "react-native";

const ChapterId = ({ route }) => {
  const { chapterId } = route.params;
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${chapterId}?language=en&words=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setVerses(data.verses);
      });
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={verses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
      <ScrollView>
        <View style={styles.verseContainer}>
          <Text style={styles.verseText}>
            {item.words.map((word) => word.text).join("")}
          </Text>
          <Text style={styles.translationText}>
            {item.words.map((word) => word.translation.text).join(" ")}
          </Text>
        </View>
      </ScrollView>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#DFF6FF",
  },
  verseContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  verseText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  translationText: {
    fontSize: 16,
    color: "#333",
  },

  
});

export default ChapterId;