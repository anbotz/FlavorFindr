import { StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Uri } from "../types/type";
import { useGetRecipeQuery } from "../api/recipe-api";
// import { useGetRecipeQuery } from "../api/recipe-api.mock";
import RecipeDetailCard from "../components/recipe-details-card";
import LoadingComponent from "../components/loading";

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
    <ScrollView contentContainerStyle={styles.container}>
      {(isFetching || isLoading) && <LoadingComponent />}
      {data && recipe && <RecipeDetailCard recipe={recipe} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default RecipeScreen;
