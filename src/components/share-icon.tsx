import { IconButton } from "react-native-paper";

const ShareIcon: React.FC<any> = (props) => {
  return <IconButton icon="share" mode="outlined" onPress={props.onPress} />;
};
export default ShareIcon;
