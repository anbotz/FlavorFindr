import { PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/store";

import HomeScreen from "./src/screens/home";
import RecipeScreen from "./src/screens/recipe";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="FlavorFindr" component={HomeScreen} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
