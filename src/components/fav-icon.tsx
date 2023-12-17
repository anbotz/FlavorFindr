import { IconButton, TouchableRippleProps } from "react-native-paper";

const FavIcon: React.FC<any> = (props) => {
  return <IconButton icon="star" mode="outlined" iconColor="red" {...props} />;
};
export default FavIcon;
