import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const IslamicQuizAndGamesScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchedQuestions = [
      {
        question: 'Who is the last prophet of Islam?',
        options: ['Muhammad', 'Moses', 'Jesus', 'Abraham'],
        correctAnswer: 'Muhammad',
      },
      
    {
        question: 'What is the holy book of Islam?',
        options: ['Bible', 'Torah', 'Quran', 'Gita'],
        correctAnswer: 'Quran',
    },
    {
        question: 'During which month is fasting (sawm) observed?',
        options: ['Ramadan', 'Shawwal', 'Dhu al-Hijjah', 'Muharram'],
        correctAnswer: 'Ramadan',
    },
    {
        question: 'Which direction do Muslims face during prayers?',
        options: ['East', 'West', 'North', 'Towards the Kaaba'],
        correctAnswer: 'Towards the Kaaba',
    },
    {
        question: 'What is the name of the pilgrimage to Mecca that Muslims are required to undertake?',
        options: ['Hajj', 'Umrah', 'Eid', 'Salat'],
        correctAnswer: 'Hajj',
    },
    ];
    setQuestions(fetchedQuestions);
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderQuestion = ({ item }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderResult = () => (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>Your Score: {score}/{questions.length}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {!showResult ? (
        <FlatList
          data={questions}
          renderItem={renderQuestion}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        renderResult()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#648761',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default IslamicQuizAndGamesScreen;
