import { StatusBar, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name='Meals Categories'
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen
            name='Meals Overview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name='Meal Detail'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
