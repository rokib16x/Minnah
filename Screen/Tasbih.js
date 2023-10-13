import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Vibration } from 'react-native';

const TasbihScreen = () => {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleCount = () => {
    if (selectedNoteId !== null) {
      const updatedNotes = notes.map((item) => {
        if (item.id === selectedNoteId) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      setNotes(updatedNotes);
      setCount(updatedNotes.find(item => item.id === selectedNoteId).count);
      Vibration.vibrate(50); // Vibrate for 50 milliseconds
    }
  }

  const handleReset = () => {
    setCount(0);
    setSelectedNoteId(null);
    Vibration.vibrate([0, 30, 20, 30]); // Vibrate in a pattern: 0ms, 30ms, 20ms, 30ms
  }

  const handleNoteChange = (text) => {
    setNote(text);
  }

  const handleStartCounting = () => {
    if (note) {
      const newNote = { id: Date.now(), text: note, count: 0 };
      setCount(0);
      setNotes([newNote, ...notes]);
      setSelectedNoteId(newNote.id);
      setNote('');
    }
  }

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter(item => item.id !== id);
    setNotes(updatedNotes);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasbih Counter</Text>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.tasbihContainer}>
        <View style={styles.inputButtonContainer}>
          <TextInput
            style={styles.noteInput}
            value={note}
            onChangeText={handleNoteChange}
            placeholderTextColor="#CCCCCC"
            placeholder="Enter a Dua..."
          />
          <TouchableOpacity style={styles.startButton} onPress={handleStartCounting}>
            <Text style={styles.buttonText}>Start Collecting</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={handleReset}>
            <Text style={[styles.buttonText, styles.resetButtonText]}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCount}>
            <Text style={styles.buttonText}>Count</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.notesContainer}>
        <FlatList
          style={styles.notesList}
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text style={styles.noteText}>{item.text}</Text>
              <View style={styles.countBadge}>
                <Text style={styles.countBadgeText}>{item.count}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteNote(item.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  countText: {
    fontSize: 36,
    color: '#333',
  },
  tasbihContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 999,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#FF5722',
  },
  resetButtonText: {
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  noteInput: {
    flex: 2,
    height: 48,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#333',
    fontSize: 14,
  },
  addNoteButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  notesContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: '#CCC',
  },
  notesTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  notesList: {
    flex: 1,
    marginVertical: 10,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  noteText: {
    fontSize: 14,
    color: '#333',
    flex: 2,
  },
  countBadge: {
    backgroundColor: '#4CAF50',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  countBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});

export default TasbihScreen;
