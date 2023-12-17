import { useMemo } from "react";
import { Uri } from "../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { dislike, like } from "../slices/like";

export const useLike = (currentRecipe?: Uri) => {
  const likes = useSelector((state: RootState) => state.like.likes);
  const dispatch = useDispatch();

  const isCurrentRecipeLiked = useMemo(
    () => !!likes.find((l: Uri) => l === currentRecipe),
    [likes, currentRecipe]
  );

  const interact = (l: Uri) => {
    isCurrentRecipeLiked ? dispatch(dislike(l)) : dispatch(like(l));
  };

  return [interact, isCurrentRecipeLiked] as const;
};
