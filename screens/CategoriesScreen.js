import { FlatList, View } from "react-native";
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridItem from "../components/CategoryGridItem";

function CategoriesScreen({ navigation }) {

  function RenderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Meals Overview', {
        categoryId: itemData.item.id
      });
    }
    return <CategoryGridItem
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler} />
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={RenderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;