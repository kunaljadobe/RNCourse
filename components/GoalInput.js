import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder='Add goal'
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.modoalButton}>
            <Button title='Add Goal' onPress={addGoalHandler} disabled={enteredGoalText.length > 0 ? false : true} />
          </View>
          <View style={styles.modoalButton}>
            <Button title="Cancel" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#311b6b',
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 24
  },
  modoalButton: {
    width: 100,
    marginVertical: 12
  }
});

export default GoalInput;