import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    <AppLoading />
  }

  function pickNumberHandler(userNumber) {
    setPickedNumber(userNumber);
    setIsGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setPickedNumber(null);
    setGuessRounds(0);
  }

  let screen = <GameStartScreen onPickNumber={pickNumberHandler} />;

  if (pickedNumber) {
    screen = (<GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />);

  }
  if (isGameOver && pickedNumber) {
    screen = <GameOverScreen guessRounds={guessRounds} userNumber={pickedNumber} startNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroundImage}
        resizeMode='cover'
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
