import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const NoContentMessageComponent: React.FC<{ text: string }> = ({ text }) => (
  <View style={styles.inner}>
    <Text variant="titleLarge" style={styles.text}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    margin: 10,
  },
  text: {
    textAlign: "center",
  },
});

export default NoContentMessageComponent;
