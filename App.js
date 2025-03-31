import { use, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function openModalHandler() {
    setModalIsVisible(true)
  }
  function closeModalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) =>
      [
        ...currentGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]
    );
    closeModalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(courseGoals => { return courseGoals.filter((item) => item.id !== id) });
  }
  return (
    <View style={styles.container}>
      <Button color='#8338ec' title='Open Modal' onPress={openModalHandler} />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onClose={closeModalHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
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
  listContainer: {
    flex: 6,
  }
});


