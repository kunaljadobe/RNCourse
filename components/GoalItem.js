import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#0077b6' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.itemPressed}
      >
        <Text style={styles.goalText}>
          {props.text}
        </Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: '#8338ec',
    borderColor: '#8338ec',
    borderWidth: 1,
    borderRadius: 5
  },
  itemPressed: {
    opacity: 0.5
  },
  goalText: {
    padding: 10,
    color: 'white',
  }
});

export default GoalItem;