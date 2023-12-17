import { Card, IconButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import FavIcon from "./fav-icon";

interface RecipeCardProps {
  label: string;
  image: string;
  onPress: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ label, image, onPress }) => {
  return (
    <Card style={styles.surface} elevation={1} onPress={onPress}>
      <Card.Cover source={{ uri: image }} />
      <Card.Title title={label} />
      <Card.Actions>
        <IconButton icon="star" mode="outlined" iconColor="red" />
        <FavIcon />
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
