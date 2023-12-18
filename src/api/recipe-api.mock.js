import { getRecipeData, searchRecipesData } from "./__mocks__/recipe.mock";

export const useSearchRecipesQuery = ({ q, health }) => {
  return { data: searchRecipesData, isLoading: false, isFetching: false };
};

export const useGetRecipeQuery = ({ uri }) => {
  return { data: getRecipeData, isLoading: false, isFetching: false };
};
