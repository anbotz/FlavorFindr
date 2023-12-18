export type Uri = string;

export type RootStackParamList = {
  FlavorFindr: undefined;
  Recipe: { uri: Uri } | undefined;
};

export type Hit = {
  recipe: {
    uri: string;
    label: string;
    image: string;
    ingredientLines: string[];
    instructionLines: string[];
  };
};

export type Health = "alcohol-cocktail" | "vegan" | "vegetarian" | "";
