import { getRecipeData, searchRecipesData } from "./__mocks__/recipe.mock";
import { GetRecipeQuery, SearchQuery } from "./api-type";

export const useSearchRecipesQuery = ({ q, health }: SearchQuery) => {
  return { data: searchRecipesData, isLoading: false, isFetching: false };
};

export const useGetRecipeQuery = ({ uri }: GetRecipeQuery) => {
  return { data: getRecipeData, isLoading: false, isFetching: false };
};
