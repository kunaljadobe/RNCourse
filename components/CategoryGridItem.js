import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridItem({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} onPress={onPress}>
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View >
  );
}

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 8,
    elevation: 4
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
    overflow: Platform === 'android' ? 'hidden' : 'visible',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})