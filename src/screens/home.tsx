import { StyleSheet, ScrollView, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/type";
import FilterComponent from "../components/filter";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useSearchRecipesQuery } from "../api/recipe-api";
// import { useSearchRecipesQuery } from "../api/recipe-api.mock";
import { useDebounce } from "use-debounce";
import RecipeCard from "../components/recipe-card";
import { useNavigation } from "@react-navigation/native";
import { TRANSLATE } from "../translate";
import LoadingComponent from "../components/loading";
import NoContentMessageComponent from "../components/no-content";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FlavorFindr"
>;

interface ScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<ScreenProps> = () => {
  const searchQuery = useSelector((state: RootState) => state.recipe.q);
  const healthQuery = useSelector((state: RootState) => state.recipe.health);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // tempo
  const [q] = useDebounce(searchQuery, 500);
  const [health] = useDebounce(healthQuery, 500);
  const isDebouncing = searchQuery !== q || healthQuery !== health;

  const { data, isLoading, isFetching } = useSearchRecipesQuery({ q, health });

  return (
    <View style={styles.container}>
      <FilterComponent placeholder={TRANSLATE.SEARCH_RECIPE} />
      {!q && !health && !isDebouncing && !isFetching && !isLoading && (
        <NoContentMessageComponent text={TRANSLATE.SEARCH_FOR_SOMETHING} />
      )}
      {(isFetching || isLoading || isDebouncing) && <LoadingComponent />}
      {(q || health) &&
        !isFetching &&
        !isLoading &&
        !isDebouncing &&
        data?.hits.length === 0 && (
          <NoContentMessageComponent text={TRANSLATE.NO_RECIPE_FOUND} />
        )}
      {!isFetching && !isLoading && !isDebouncing && data && (
        <ScrollView>
          {data.hits.map((h, key) => (
            <RecipeCard
              key={key}
              label={h.recipe.label}
              image={h.recipe.image}
              onPress={() =>
                navigation.navigate("Recipe", { uri: h.recipe.uri })
              }
              uri={h.recipe.uri}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
