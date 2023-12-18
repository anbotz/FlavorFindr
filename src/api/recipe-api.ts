import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_ID, APP_KEY } from "@env";
import { GetRecipeQuery, RecipeData, SearchQuery } from "./api-type";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.edamam.com/api/recipes/v2",
  }),
  endpoints: (builder) => ({
    searchRecipes: builder.query<RecipeData, SearchQuery>({
      query: ({ q, health }) => ({
        url: `?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${q}${
          health ? `&health=${health}` : ""
        }&field=label&field=image&field=uri`,
        // we can't use this part, RTK Query doesn't manage array
        // url: "",
        // params: {
        //   q,
        //   type: "public",
        //   health,
        //   app_id: APP_ID,
        //   app_key: APP_KEY,
        //   "Accept-Language": "french",
        //   field: ["image", "label"],
        // },
      }),
    }),

    getRecipe: builder.query<RecipeData, GetRecipeQuery>({
      query: ({ uri }) => ({
        url: "/by-uri",
        params: {
          uri,
          type: "public",
          app_id: APP_ID,
          app_key: APP_KEY,
          "Accept-Language": "french",
        },
      }),
    }),
  }),
});

export const { useSearchRecipesQuery, useGetRecipeQuery } = recipeApi;
