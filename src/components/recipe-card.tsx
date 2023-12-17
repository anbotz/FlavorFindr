import { Card, IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import FavIcon from "./fav-icon";
import { useLike } from "../hooks/use-like";
import { Uri } from "../types/type";

interface RecipeCardProps {
  label: string;
  image: string;
  onPress: () => void;
  uri: Uri;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  label,
  image,
  onPress,
  uri,
}) => {
  const [interact, isCurrentRecipeLiked] = useLike(uri);

  return (
    <Card style={styles.surface} elevation={1} onPress={onPress}>
      <Card.Cover source={{ uri: image }} />
      <Card.Title title={label} />
      <Card.Actions>
        <FavIcon
          onPress={() => interact(uri)}
          selected={isCurrentRecipeLiked}
        />
      </Card.Actions>
    </Card>
  );
};
export default RecipeCard;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    margin: 5,
  },
});
