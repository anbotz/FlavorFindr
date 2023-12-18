import { View } from "react-native";
import { SegmentedButtons, Searchbar, Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { filterHealth, search } from "../slices/recipe";
import { Health } from "../types/type";
import { TRANSLATE } from "../translate";

const FilterComponent: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  const searchQuery = useSelector((state: RootState) => state.recipe.q);
  const health = useSelector((state: RootState) => state.recipe.health);
  const dispatch = useDispatch();

  return (
    <View>
      <Searchbar
        onChangeText={(s) => dispatch(search(s))}
        value={searchQuery}
        placeholder={placeholder}
      />
      <SegmentedButtons
        value={health}
        density="high"
        onValueChange={(v) => {
          const h = v as Health;
          dispatch(filterHealth(h === health ? "" : h));
        }}
        buttons={[
          {
            value: "vegetarian",
            label: TRANSLATE.VEGETARIAN,
          },
          {
            value: "vegan",
            label: TRANSLATE.VEGAN,
          },
          {
            value: "alcohol-cocktail",
            icon: "glass-cocktail",
          },
        ]}
      />
      <Divider />
    </View>
  );
};

export default FilterComponent;
