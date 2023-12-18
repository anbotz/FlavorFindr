import { Health, Hit } from "../types/type";

export type RecipeData = { hits: Hit[] };
export type SearchQuery = { q: string; health?: Health };
export type GetRecipeQuery = { uri: string };
