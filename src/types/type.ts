export type Uri = string;

export type RootStackParamList = {
  FlavorFindr: undefined;
  Recipe: { uri: Uri } | undefined;
};

export type Health = "alcohol-cocktail" | "vegan" | "vegetarian" | "";
