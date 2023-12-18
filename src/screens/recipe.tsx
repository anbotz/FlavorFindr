import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Uri } from "../types/type";
import { useGetRecipeQuery } from "../api/recipe-api";
// import { useGetRecipeQuery } from "../api/recipe-api.mock";
import RecipeDetailCard from "../components/recipe-details-card";

type RecipeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Recipe"
>;

interface ScreenProps {
  navigation: RecipeScreenNavigationProp;
  route: {
    params: {
      uri: Uri;
    };
  };
}

const RecipeScreen: React.FC<ScreenProps> = ({ route }) => {
  const { uri } = route.params;

  const { data, isLoading, isFetching } = useGetRecipeQuery({ uri });
  const recipe = data && data.hits[0].recipe;

  return (
    <ScrollView>
      {(isFetching || isLoading) && (
        <ActivityIndicator animating={true} size="large" />
      )}
      {data && recipe && <RecipeDetailCard recipe={recipe} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  indicatorScrollView: { flex: 1, justifyContent: "center", height: "100%" },

  surface: {
    padding: 8,
    margin: 5,
  },
});

export default RecipeScreen;
