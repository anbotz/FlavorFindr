import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const LoadingComponent: React.FC<any> = () => (
  <View style={styles.inner}>
    <ActivityIndicator animating={true} size="large" />
  </View>
);

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingComponent;
