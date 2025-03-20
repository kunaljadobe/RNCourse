import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) =>
      [
        ...currentGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]
    );
    setEnteredGoalText('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Add goal' style={styles.inputBox} onChangeText={goalInputHandler} value={enteredGoalText} />
        <Button title='Add Goal' onPress={addGoalHandler} disabled={enteredGoalText.length > 0 ? false : true} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                  {itemData.item.text}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '60%',
    borderRadius: 5,
  },
  listContainer: {
    flex: 6,
  },
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  goalText: {
    color: 'white',
  }
});


