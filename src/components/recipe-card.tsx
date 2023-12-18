import { Card } from "react-native-paper";
import { Alert, Share, StyleSheet } from "react-native";
import FavIcon from "./fav-icon";
import { useInteraction } from "../hooks/use-interaction";
import { Uri } from "../types/type";
import ShareIcon from "./share-icon";

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
  const [onLike, isCurrentRecipeLiked, onShare] = useInteraction(uri);

  return (
    <Card style={styles.surface} elevation={1} onPress={onPress}>
      <Card.Cover source={{ uri: image }} />
      <Card.Title title={label} />
      <Card.Actions>
        <FavIcon onPress={() => onLike(uri)} selected={isCurrentRecipeLiked} />
        <ShareIcon onPress={() => onShare(uri)} />
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
