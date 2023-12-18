import { useMemo } from "react";
import { Uri } from "../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { dislike, like } from "../slices/like";
import { Alert, Share } from "react-native";

export const useInteraction = (currentRecipe?: Uri) => {
  const likes = useSelector((state: RootState) => state.like.likes);
  const dispatch = useDispatch();

  const onShare = async (uri: Uri) => {
    try {
      const result = await Share.share({
        message: "Check this recipe I found on FlavorFindr",
        url: uri,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const isCurrentRecipeLiked = useMemo(
    () => !!likes.find((l: Uri) => l === currentRecipe),
    [likes, currentRecipe]
  );

  const onLike = (l: Uri) => {
    isCurrentRecipeLiked ? dispatch(dislike(l)) : dispatch(like(l));
  };

  return [onLike, isCurrentRecipeLiked, onShare] as const;
};
