import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { TRANSLATE } from "../translate";
import FavIcon from "../components/fav-icon";

type Recipe = {
  label: string;
  image: string;
  ingredientLines: string[];
  instructionLines: string[];
};

interface RecipeDetailCardProps {
  recipe: Recipe;
}

const RecipeDetailCard: React.FC<RecipeDetailCardProps> = ({ recipe }) => {
  return (
    <Card style={styles.surface} elevation={1}>
      <Card.Title
        titleVariant="titleLarge"
        title={recipe.label}
        right={(props) => <FavIcon {...props} />}
      />
      <Card.Cover source={{ uri: recipe.image }} />
      <Card.Content>
        {recipe.ingredientLines?.length > 0 && (
          <>
            <Text variant="titleLarge">{TRANSLATE.INGREDIENTS}</Text>
            {recipe.ingredientLines.map((line, i) => (
              <Text variant="bodySmall" key={i}>
                {line}
              </Text>
            ))}
          </>
        )}
        {recipe.instructionLines?.length > 0 && (
          <>
            <Text variant="titleLarge">{TRANSLATE.INSTRUCTIONS}</Text>
            {recipe.instructionLines.map((line, i) => (
              <Text variant="bodySmall" key={i}>
                {line}
              </Text>
            ))}
          </>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    margin: 5,
  },
});

export default RecipeDetailCard;
