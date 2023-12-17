import { ActivityIndicator, Card, IconButton, Text } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, Uri } from "../types/type";
import { useGetRecipeQuery } from "../api/recipe-api";
import RecipeDetailCard from "../components/recipe-details-card";

const titi = {
  from: 1,
  to: 1,
  count: 1,
  _links: {},
  hits: [
    {
      recipe: {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_4bb99424e1bbc40d3cd1d891883d6745",
        label: "Frothy Iced Matcha Green Tea Recipe",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJHMEUCIGdfShClUp16r3FgtMAyeCXdFy7ub2fl6GGnvU36EohLAiEA78GxiZgp8uiZzauoA7jSR5N7Ua8A8ZZL3pahUQDqcJUqwgUIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMdw1FjCwtG8qJOraiqWBfceqROjbbwRfq1CVaRJ8pgUUWTBK4fXe28v4kuYIHwLRQvQaOTtZw14DQrwd91IfNPJYkYgJAt%2FLSrrY58I%2Bt8XkZgypD0lb6wC8Dw99yurfC%2FygX%2BePF%2Fqgj%2BVcQb%2BG5jsNYxs3M8SKzVw2I6n4VIjTVOZ6zOeq4JPLeWNf3G%2BTrSXaTZ%2FiRREZAAfQ1qj5uT4Sll6txuZmKX0UmTh6bMD61BXW75toYPuTmwzEHGBiLhZY1blkcRJKSOjjvub2aW1u8GFuyEfvztw2WOiaTJAVjSmVijmDXMmKWjGhqR3ikCOGzNoZ3b0zxFyv%2BOnuxavRAzKQqJ6m3n%2BD%2FNohgGvaaLNDhCLSR44CkYbuT72zjaGevqfejj%2BnHviJYJmxYfPw2yo1GKmuug3BeikTNLjj70MeQ2euOBXXxRsfczC5%2Be5ZxbeIezZW85R%2BakuVzHwqU9eIXAOKspkXGVSL7CwlcIDDL3QfQ7aaVgp9RbDcbHg05PkaeN%2BR8%2BnZJYSfPQttBGym3toJk6Cc6FA5TuPs9ISRfvC2T5B1wBs4WY%2FCV8MQYo3wX9yU8YaWmearIpxr54TIf%2B5M1pptM9GTU8GjAOcOM1sYe2tKnJvb%2Bh4tCbzoE5Oz0IGyB744PnUSN8Qy5w4Vx5FV83D%2Bn7LDdkM0fnMIrhW1P5V3ZoBL6rtYVmtiSaDhXNEpMi4Yo%2Fk0hIYgWLi9f1KGgsjXey5ASTVHPpcFKD7bVevpASLysj7xUSSw3xX7cWvdHzJ%2BXL0QTOG%2FtHPCbZaCCDRE%2BHN4cBhCyuR37ZHY2F1%2FvocQgjhEhcy1vCaT%2BCj7QfumU8frHtUZErNEDHLTnXXiaRCJEr5W35HjKjdCZbsGff%2BUrmE%2F%2BfdYwUWMJnk%2FKsGOrEBH%2FsibqYq%2BxcwA4MoF%2FNc6HNyITpm%2FiP%2B3LqxkXmdTktht%2BvRr8MGcbMakN3PAhSMy8wc9jTWgJ3Yme55vrfHCCFu9yBjex5MbrfAPEcSLHtQHrSqH7xgEzlQ7Gpd4bsKa6vyEwfvosqi%2Bvkcn%2B654Sc7ReXiIngP%2BueyVUI5%2FD%2Bq508KITwfvdyStnw%2BEH1MuSVLulp8wVa%2F9T%2FpgcLi5Ujzuz0AkkbE5j9LhpB2y805&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T175415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJX5A3YFF%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b6387d195df020134fc950714c6de74bb780ae87d9c79a9e5ee643eb9fd0b86",
        images: {
          THUMBNAIL: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJHMEUCIGdfShClUp16r3FgtMAyeCXdFy7ub2fl6GGnvU36EohLAiEA78GxiZgp8uiZzauoA7jSR5N7Ua8A8ZZL3pahUQDqcJUqwgUIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMdw1FjCwtG8qJOraiqWBfceqROjbbwRfq1CVaRJ8pgUUWTBK4fXe28v4kuYIHwLRQvQaOTtZw14DQrwd91IfNPJYkYgJAt%2FLSrrY58I%2Bt8XkZgypD0lb6wC8Dw99yurfC%2FygX%2BePF%2Fqgj%2BVcQb%2BG5jsNYxs3M8SKzVw2I6n4VIjTVOZ6zOeq4JPLeWNf3G%2BTrSXaTZ%2FiRREZAAfQ1qj5uT4Sll6txuZmKX0UmTh6bMD61BXW75toYPuTmwzEHGBiLhZY1blkcRJKSOjjvub2aW1u8GFuyEfvztw2WOiaTJAVjSmVijmDXMmKWjGhqR3ikCOGzNoZ3b0zxFyv%2BOnuxavRAzKQqJ6m3n%2BD%2FNohgGvaaLNDhCLSR44CkYbuT72zjaGevqfejj%2BnHviJYJmxYfPw2yo1GKmuug3BeikTNLjj70MeQ2euOBXXxRsfczC5%2Be5ZxbeIezZW85R%2BakuVzHwqU9eIXAOKspkXGVSL7CwlcIDDL3QfQ7aaVgp9RbDcbHg05PkaeN%2BR8%2BnZJYSfPQttBGym3toJk6Cc6FA5TuPs9ISRfvC2T5B1wBs4WY%2FCV8MQYo3wX9yU8YaWmearIpxr54TIf%2B5M1pptM9GTU8GjAOcOM1sYe2tKnJvb%2Bh4tCbzoE5Oz0IGyB744PnUSN8Qy5w4Vx5FV83D%2Bn7LDdkM0fnMIrhW1P5V3ZoBL6rtYVmtiSaDhXNEpMi4Yo%2Fk0hIYgWLi9f1KGgsjXey5ASTVHPpcFKD7bVevpASLysj7xUSSw3xX7cWvdHzJ%2BXL0QTOG%2FtHPCbZaCCDRE%2BHN4cBhCyuR37ZHY2F1%2FvocQgjhEhcy1vCaT%2BCj7QfumU8frHtUZErNEDHLTnXXiaRCJEr5W35HjKjdCZbsGff%2BUrmE%2F%2BfdYwUWMJnk%2FKsGOrEBH%2FsibqYq%2BxcwA4MoF%2FNc6HNyITpm%2FiP%2B3LqxkXmdTktht%2BvRr8MGcbMakN3PAhSMy8wc9jTWgJ3Yme55vrfHCCFu9yBjex5MbrfAPEcSLHtQHrSqH7xgEzlQ7Gpd4bsKa6vyEwfvosqi%2Bvkcn%2B654Sc7ReXiIngP%2BueyVUI5%2FD%2Bq508KITwfvdyStnw%2BEH1MuSVLulp8wVa%2F9T%2FpgcLi5Ujzuz0AkkbE5j9LhpB2y805&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T175415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJX5A3YFF%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1ccb89f1eee0d11a89f0da48b885e88d350be430dd1359f67493873d85cf17cb",
            width: 100,
            height: 100,
          },
          SMALL: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJHMEUCIGdfShClUp16r3FgtMAyeCXdFy7ub2fl6GGnvU36EohLAiEA78GxiZgp8uiZzauoA7jSR5N7Ua8A8ZZL3pahUQDqcJUqwgUIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMdw1FjCwtG8qJOraiqWBfceqROjbbwRfq1CVaRJ8pgUUWTBK4fXe28v4kuYIHwLRQvQaOTtZw14DQrwd91IfNPJYkYgJAt%2FLSrrY58I%2Bt8XkZgypD0lb6wC8Dw99yurfC%2FygX%2BePF%2Fqgj%2BVcQb%2BG5jsNYxs3M8SKzVw2I6n4VIjTVOZ6zOeq4JPLeWNf3G%2BTrSXaTZ%2FiRREZAAfQ1qj5uT4Sll6txuZmKX0UmTh6bMD61BXW75toYPuTmwzEHGBiLhZY1blkcRJKSOjjvub2aW1u8GFuyEfvztw2WOiaTJAVjSmVijmDXMmKWjGhqR3ikCOGzNoZ3b0zxFyv%2BOnuxavRAzKQqJ6m3n%2BD%2FNohgGvaaLNDhCLSR44CkYbuT72zjaGevqfejj%2BnHviJYJmxYfPw2yo1GKmuug3BeikTNLjj70MeQ2euOBXXxRsfczC5%2Be5ZxbeIezZW85R%2BakuVzHwqU9eIXAOKspkXGVSL7CwlcIDDL3QfQ7aaVgp9RbDcbHg05PkaeN%2BR8%2BnZJYSfPQttBGym3toJk6Cc6FA5TuPs9ISRfvC2T5B1wBs4WY%2FCV8MQYo3wX9yU8YaWmearIpxr54TIf%2B5M1pptM9GTU8GjAOcOM1sYe2tKnJvb%2Bh4tCbzoE5Oz0IGyB744PnUSN8Qy5w4Vx5FV83D%2Bn7LDdkM0fnMIrhW1P5V3ZoBL6rtYVmtiSaDhXNEpMi4Yo%2Fk0hIYgWLi9f1KGgsjXey5ASTVHPpcFKD7bVevpASLysj7xUSSw3xX7cWvdHzJ%2BXL0QTOG%2FtHPCbZaCCDRE%2BHN4cBhCyuR37ZHY2F1%2FvocQgjhEhcy1vCaT%2BCj7QfumU8frHtUZErNEDHLTnXXiaRCJEr5W35HjKjdCZbsGff%2BUrmE%2F%2BfdYwUWMJnk%2FKsGOrEBH%2FsibqYq%2BxcwA4MoF%2FNc6HNyITpm%2FiP%2B3LqxkXmdTktht%2BvRr8MGcbMakN3PAhSMy8wc9jTWgJ3Yme55vrfHCCFu9yBjex5MbrfAPEcSLHtQHrSqH7xgEzlQ7Gpd4bsKa6vyEwfvosqi%2Bvkcn%2B654Sc7ReXiIngP%2BueyVUI5%2FD%2Bq508KITwfvdyStnw%2BEH1MuSVLulp8wVa%2F9T%2FpgcLi5Ujzuz0AkkbE5j9LhpB2y805&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T175415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJX5A3YFF%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5e1e802f72b7a90a64ae5782caf4197db2404c658d9d16dd7d79c38f4817fcb7",
            width: 200,
            height: 200,
          },
          REGULAR: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJHMEUCIGdfShClUp16r3FgtMAyeCXdFy7ub2fl6GGnvU36EohLAiEA78GxiZgp8uiZzauoA7jSR5N7Ua8A8ZZL3pahUQDqcJUqwgUIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMdw1FjCwtG8qJOraiqWBfceqROjbbwRfq1CVaRJ8pgUUWTBK4fXe28v4kuYIHwLRQvQaOTtZw14DQrwd91IfNPJYkYgJAt%2FLSrrY58I%2Bt8XkZgypD0lb6wC8Dw99yurfC%2FygX%2BePF%2Fqgj%2BVcQb%2BG5jsNYxs3M8SKzVw2I6n4VIjTVOZ6zOeq4JPLeWNf3G%2BTrSXaTZ%2FiRREZAAfQ1qj5uT4Sll6txuZmKX0UmTh6bMD61BXW75toYPuTmwzEHGBiLhZY1blkcRJKSOjjvub2aW1u8GFuyEfvztw2WOiaTJAVjSmVijmDXMmKWjGhqR3ikCOGzNoZ3b0zxFyv%2BOnuxavRAzKQqJ6m3n%2BD%2FNohgGvaaLNDhCLSR44CkYbuT72zjaGevqfejj%2BnHviJYJmxYfPw2yo1GKmuug3BeikTNLjj70MeQ2euOBXXxRsfczC5%2Be5ZxbeIezZW85R%2BakuVzHwqU9eIXAOKspkXGVSL7CwlcIDDL3QfQ7aaVgp9RbDcbHg05PkaeN%2BR8%2BnZJYSfPQttBGym3toJk6Cc6FA5TuPs9ISRfvC2T5B1wBs4WY%2FCV8MQYo3wX9yU8YaWmearIpxr54TIf%2B5M1pptM9GTU8GjAOcOM1sYe2tKnJvb%2Bh4tCbzoE5Oz0IGyB744PnUSN8Qy5w4Vx5FV83D%2Bn7LDdkM0fnMIrhW1P5V3ZoBL6rtYVmtiSaDhXNEpMi4Yo%2Fk0hIYgWLi9f1KGgsjXey5ASTVHPpcFKD7bVevpASLysj7xUSSw3xX7cWvdHzJ%2BXL0QTOG%2FtHPCbZaCCDRE%2BHN4cBhCyuR37ZHY2F1%2FvocQgjhEhcy1vCaT%2BCj7QfumU8frHtUZErNEDHLTnXXiaRCJEr5W35HjKjdCZbsGff%2BUrmE%2F%2BfdYwUWMJnk%2FKsGOrEBH%2FsibqYq%2BxcwA4MoF%2FNc6HNyITpm%2FiP%2B3LqxkXmdTktht%2BvRr8MGcbMakN3PAhSMy8wc9jTWgJ3Yme55vrfHCCFu9yBjex5MbrfAPEcSLHtQHrSqH7xgEzlQ7Gpd4bsKa6vyEwfvosqi%2Bvkcn%2B654Sc7ReXiIngP%2BueyVUI5%2FD%2Bq508KITwfvdyStnw%2BEH1MuSVLulp8wVa%2F9T%2FpgcLi5Ujzuz0AkkbE5j9LhpB2y805&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T175415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJX5A3YFF%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b6387d195df020134fc950714c6de74bb780ae87d9c79a9e5ee643eb9fd0b86",
            width: 300,
            height: 300,
          },
          LARGE: {
            url: "https://edamam-product-images.s3.amazonaws.com/web-img/643/643d4bad9cc21284f7f52b1b9b862848-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLWVhc3QtMSJHMEUCIGdfShClUp16r3FgtMAyeCXdFy7ub2fl6GGnvU36EohLAiEA78GxiZgp8uiZzauoA7jSR5N7Ua8A8ZZL3pahUQDqcJUqwgUIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMdw1FjCwtG8qJOraiqWBfceqROjbbwRfq1CVaRJ8pgUUWTBK4fXe28v4kuYIHwLRQvQaOTtZw14DQrwd91IfNPJYkYgJAt%2FLSrrY58I%2Bt8XkZgypD0lb6wC8Dw99yurfC%2FygX%2BePF%2Fqgj%2BVcQb%2BG5jsNYxs3M8SKzVw2I6n4VIjTVOZ6zOeq4JPLeWNf3G%2BTrSXaTZ%2FiRREZAAfQ1qj5uT4Sll6txuZmKX0UmTh6bMD61BXW75toYPuTmwzEHGBiLhZY1blkcRJKSOjjvub2aW1u8GFuyEfvztw2WOiaTJAVjSmVijmDXMmKWjGhqR3ikCOGzNoZ3b0zxFyv%2BOnuxavRAzKQqJ6m3n%2BD%2FNohgGvaaLNDhCLSR44CkYbuT72zjaGevqfejj%2BnHviJYJmxYfPw2yo1GKmuug3BeikTNLjj70MeQ2euOBXXxRsfczC5%2Be5ZxbeIezZW85R%2BakuVzHwqU9eIXAOKspkXGVSL7CwlcIDDL3QfQ7aaVgp9RbDcbHg05PkaeN%2BR8%2BnZJYSfPQttBGym3toJk6Cc6FA5TuPs9ISRfvC2T5B1wBs4WY%2FCV8MQYo3wX9yU8YaWmearIpxr54TIf%2B5M1pptM9GTU8GjAOcOM1sYe2tKnJvb%2Bh4tCbzoE5Oz0IGyB744PnUSN8Qy5w4Vx5FV83D%2Bn7LDdkM0fnMIrhW1P5V3ZoBL6rtYVmtiSaDhXNEpMi4Yo%2Fk0hIYgWLi9f1KGgsjXey5ASTVHPpcFKD7bVevpASLysj7xUSSw3xX7cWvdHzJ%2BXL0QTOG%2FtHPCbZaCCDRE%2BHN4cBhCyuR37ZHY2F1%2FvocQgjhEhcy1vCaT%2BCj7QfumU8frHtUZErNEDHLTnXXiaRCJEr5W35HjKjdCZbsGff%2BUrmE%2F%2BfdYwUWMJnk%2FKsGOrEBH%2FsibqYq%2BxcwA4MoF%2FNc6HNyITpm%2FiP%2B3LqxkXmdTktht%2BvRr8MGcbMakN3PAhSMy8wc9jTWgJ3Yme55vrfHCCFu9yBjex5MbrfAPEcSLHtQHrSqH7xgEzlQ7Gpd4bsKa6vyEwfvosqi%2Bvkcn%2B654Sc7ReXiIngP%2BueyVUI5%2FD%2Bq508KITwfvdyStnw%2BEH1MuSVLulp8wVa%2F9T%2FpgcLi5Ujzuz0AkkbE5j9LhpB2y805&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T175415Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJX5A3YFF%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5129f2afb610a2895cfd91a851e6451d859fb0d89094759ed31d18b1c3785b03",
            width: 600,
            height: 600,
          },
        },
        source: "Serious Eats",
        url: "http://www.seriouseats.com/recipes/2016/08/iced-matcha-green-tea-recipe.html",
        shareAs:
          "http://www.edamam.com/recipe/frothy-iced-matcha-green-tea-recipe-4bb99424e1bbc40d3cd1d891883d6745/-",
        yield: 2,
        dietLabels: ["High-Protein", "Low-Fat", "Low-Sodium"],
        healthLabels: [
          "Sugar-Conscious",
          "Low Sugar",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Kosher",
        ],
        cautions: ["Sulfites"],
        ingredientLines: [
          "2 teaspoons (6g) Japanese matcha green tea (see note above)",
          "8 ounces (235ml) cold water",
        ],
        ingredients: [
          {
            text: "2 teaspoons (6g) Japanese matcha green tea (see note above)",
            quantity: 6,
            measure: "gram",
            food: "green tea",
            weight: 6,
            foodCategory: "coffee and tea",
            foodId: "food_bkruak3a9kn081aom63x9a0lpqxn",
            image:
              "https://www.edamam.com/food-img/db9/db99a766fad87e02b4eac4840daaeaad.jpg",
          },
          {
            text: "8 ounces (235ml) cold water",
            quantity: 8,
            measure: "ounce",
            food: "water",
            weight: 226.796185,
            foodCategory: "water",
            foodId: "food_a99vzubbk1ayrsad318rvbzr3dh0",
            image:
              "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
          },
        ],
        calories: 0.06,
        totalCO2Emissions: 10.270800000000001,
        co2EmissionsClass: "A+",
        totalWeight: 232.796185,
        totalTime: 2,
        cuisineType: ["american"],
        mealType: ["lunch/dinner"],
        dishType: ["drinks"],
        totalNutrients: {
          ENERC_KCAL: {
            label: "Energy",
            quantity: 0.06,
            unit: "kcal",
          },
          FAT: {
            label: "Fat",
            quantity: 0,
            unit: "g",
          },
          FASAT: {
            label: "Saturated",
            quantity: 0,
            unit: "g",
          },
          FATRN: {
            label: "Trans",
            quantity: 0,
            unit: "g",
          },
          FAMS: {
            label: "Monounsaturated",
            quantity: 0,
            unit: "g",
          },
          FAPU: {
            label: "Polyunsaturated",
            quantity: 0,
            unit: "g",
          },
          CHOCDF: {
            label: "Carbs",
            quantity: 0,
            unit: "g",
          },
          FIBTG: {
            label: "Fiber",
            quantity: 0,
            unit: "g",
          },
          SUGAR: {
            label: "Sugars",
            quantity: 0,
            unit: "g",
          },
          PROCNT: {
            label: "Protein",
            quantity: 0.010799999999999999,
            unit: "g",
          },
          CHOLE: {
            label: "Cholesterol",
            quantity: 0,
            unit: "mg",
          },
          NA: {
            label: "Sodium",
            quantity: 9.131847400000002,
            unit: "mg",
          },
          CA: {
            label: "Calcium",
            quantity: 6.80388555,
            unit: "mg",
          },
          MG: {
            label: "Magnesium",
            quantity: 2.3279618500000003,
            unit: "mg",
          },
          K: {
            label: "Potassium",
            quantity: 0.42,
            unit: "mg",
          },
          FE: {
            label: "Iron",
            quantity: 0.0012,
            unit: "mg",
          },
          ZN: {
            label: "Zinc",
            quantity: 0.0232796185,
            unit: "mg",
          },
          P: {
            label: "Phosphorus",
            quantity: 0,
            unit: "mg",
          },
          VITA_RAE: {
            label: "Vitamin A",
            quantity: 0,
            unit: "µg",
          },
          VITC: {
            label: "Vitamin C",
            quantity: 0,
            unit: "mg",
          },
          THIA: {
            label: "Thiamin (B1)",
            quantity: 0,
            unit: "mg",
          },
          RIBF: {
            label: "Riboflavin (B2)",
            quantity: 0,
            unit: "mg",
          },
          NIA: {
            label: "Niacin (B3)",
            quantity: 0,
            unit: "mg",
          },
          VITB6A: {
            label: "Vitamin B6",
            quantity: 0,
            unit: "mg",
          },
          FOLDFE: {
            label: "Folate equivalent (total)",
            quantity: 0,
            unit: "µg",
          },
          FOLFD: {
            label: "Folate (food)",
            quantity: 0,
            unit: "µg",
          },
          FOLAC: {
            label: "Folic acid",
            quantity: 0,
            unit: "µg",
          },
          VITB12: {
            label: "Vitamin B12",
            quantity: 0,
            unit: "µg",
          },
          VITD: {
            label: "Vitamin D",
            quantity: 0,
            unit: "µg",
          },
          TOCPHA: {
            label: "Vitamin E",
            quantity: 0,
            unit: "mg",
          },
          VITK1: {
            label: "Vitamin K",
            quantity: 0,
            unit: "µg",
          },
          WATER: {
            label: "Water",
            quantity: 232.56338881500005,
            unit: "g",
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: "Energy",
            quantity: 0.003,
            unit: "%",
          },
          FAT: {
            label: "Fat",
            quantity: 0,
            unit: "%",
          },
          FASAT: {
            label: "Saturated",
            quantity: 0,
            unit: "%",
          },
          CHOCDF: {
            label: "Carbs",
            quantity: 0,
            unit: "%",
          },
          FIBTG: {
            label: "Fiber",
            quantity: 0,
            unit: "%",
          },
          PROCNT: {
            label: "Protein",
            quantity: 0.021599999999999998,
            unit: "%",
          },
          CHOLE: {
            label: "Cholesterol",
            quantity: 0,
            unit: "%",
          },
          NA: {
            label: "Sodium",
            quantity: 0.3804936416666667,
            unit: "%",
          },
          CA: {
            label: "Calcium",
            quantity: 0.680388555,
            unit: "%",
          },
          MG: {
            label: "Magnesium",
            quantity: 0.554276630952381,
            unit: "%",
          },
          K: {
            label: "Potassium",
            quantity: 0.008936170212765958,
            unit: "%",
          },
          FE: {
            label: "Iron",
            quantity: 0.006666666666666666,
            unit: "%",
          },
          ZN: {
            label: "Zinc",
            quantity: 0.21163289545454547,
            unit: "%",
          },
          P: {
            label: "Phosphorus",
            quantity: 0,
            unit: "%",
          },
          VITA_RAE: {
            label: "Vitamin A",
            quantity: 0,
            unit: "%",
          },
          VITC: {
            label: "Vitamin C",
            quantity: 0,
            unit: "%",
          },
          THIA: {
            label: "Thiamin (B1)",
            quantity: 0,
            unit: "%",
          },
          RIBF: {
            label: "Riboflavin (B2)",
            quantity: 0,
            unit: "%",
          },
          NIA: {
            label: "Niacin (B3)",
            quantity: 0,
            unit: "%",
          },
          VITB6A: {
            label: "Vitamin B6",
            quantity: 0,
            unit: "%",
          },
          FOLDFE: {
            label: "Folate equivalent (total)",
            quantity: 0,
            unit: "%",
          },
          VITB12: {
            label: "Vitamin B12",
            quantity: 0,
            unit: "%",
          },
          VITD: {
            label: "Vitamin D",
            quantity: 0,
            unit: "%",
          },
          TOCPHA: {
            label: "Vitamin E",
            quantity: 0,
            unit: "%",
          },
          VITK1: {
            label: "Vitamin K",
            quantity: 0,
            unit: "%",
          },
        },
        digest: [
          {
            label: "Fat",
            tag: "FAT",
            schemaOrgTag: "fatContent",
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "g",
            sub: [
              {
                label: "Saturated",
                tag: "FASAT",
                schemaOrgTag: "saturatedFatContent",
                total: 0,
                hasRDI: true,
                daily: 0,
                unit: "g",
              },
              {
                label: "Trans",
                tag: "FATRN",
                schemaOrgTag: "transFatContent",
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: "g",
              },
              {
                label: "Monounsaturated",
                tag: "FAMS",
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: "g",
              },
              {
                label: "Polyunsaturated",
                tag: "FAPU",
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: "g",
              },
            ],
          },
          {
            label: "Carbs",
            tag: "CHOCDF",
            schemaOrgTag: "carbohydrateContent",
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "g",
            sub: [
              {
                label: "Carbs (net)",
                tag: "CHOCDF.net",
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: "g",
              },
              {
                label: "Fiber",
                tag: "FIBTG",
                schemaOrgTag: "fiberContent",
                total: 0,
                hasRDI: true,
                daily: 0,
                unit: "g",
              },
              {
                label: "Sugars",
                tag: "SUGAR",
                schemaOrgTag: "sugarContent",
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: "g",
              },
              {
                label: "Sugars, added",
                tag: "SUGAR.added",
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: "g",
              },
            ],
          },
          {
            label: "Protein",
            tag: "PROCNT",
            schemaOrgTag: "proteinContent",
            total: 0.010799999999999999,
            hasRDI: true,
            daily: 0.021599999999999998,
            unit: "g",
          },
          {
            label: "Cholesterol",
            tag: "CHOLE",
            schemaOrgTag: "cholesterolContent",
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Sodium",
            tag: "NA",
            schemaOrgTag: "sodiumContent",
            total: 9.131847400000002,
            hasRDI: true,
            daily: 0.3804936416666667,
            unit: "mg",
          },
          {
            label: "Calcium",
            tag: "CA",
            schemaOrgTag: null,
            total: 6.80388555,
            hasRDI: true,
            daily: 0.680388555,
            unit: "mg",
          },
          {
            label: "Magnesium",
            tag: "MG",
            schemaOrgTag: null,
            total: 2.3279618500000003,
            hasRDI: true,
            daily: 0.554276630952381,
            unit: "mg",
          },
          {
            label: "Potassium",
            tag: "K",
            schemaOrgTag: null,
            total: 0.42,
            hasRDI: true,
            daily: 0.008936170212765958,
            unit: "mg",
          },
          {
            label: "Iron",
            tag: "FE",
            schemaOrgTag: null,
            total: 0.0012,
            hasRDI: true,
            daily: 0.006666666666666666,
            unit: "mg",
          },
          {
            label: "Zinc",
            tag: "ZN",
            schemaOrgTag: null,
            total: 0.0232796185,
            hasRDI: true,
            daily: 0.21163289545454547,
            unit: "mg",
          },
          {
            label: "Phosphorus",
            tag: "P",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Vitamin A",
            tag: "VITA_RAE",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Vitamin C",
            tag: "VITC",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Thiamin (B1)",
            tag: "THIA",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Riboflavin (B2)",
            tag: "RIBF",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Niacin (B3)",
            tag: "NIA",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Vitamin B6",
            tag: "VITB6A",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Folate equivalent (total)",
            tag: "FOLDFE",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Folate (food)",
            tag: "FOLFD",
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Folic acid",
            tag: "FOLAC",
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Vitamin B12",
            tag: "VITB12",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Vitamin D",
            tag: "VITD",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Vitamin E",
            tag: "TOCPHA",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "mg",
          },
          {
            label: "Vitamin K",
            tag: "VITK1",
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "µg",
          },
          {
            label: "Sugar alcohols",
            tag: "Sugar.alcohol",
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: "g",
          },
          {
            label: "Water",
            tag: "WATER",
            schemaOrgTag: null,
            total: 232.56338881500005,
            hasRDI: false,
            daily: 0,
            unit: "g",
          },
        ],
        instructionLines: [
          "In a cocktail shaker or sealable plastic container, combine matcha and water, seal tightly, then shake vigorously for about 15 seconds.",
          "Pour into a bowl or large mug with ice and serve.",
        ],
        summary:
          "[Photograph: Vicky Wasik] Iced matcha green tea is a refreshing summer beverage, but it's best when there's a nice frothy head on the brew. We tested multiple mixing methods to find the one that produces the most ample and stable foam.",
        tags: [
          "quick",
          "tea",
          "asian",
          "iced tea",
          "japanese",
          "summer",
          "matcha",
        ],
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/4bb99424e1bbc40d3cd1d891883d6745?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
  ],
};
type RecipeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Recipe"
>;

interface ScreenProps {
  navigation: RecipeScreenNavigationProp;
  route: {
    params: {
      uri: Uri;
    };
  };
}

const RecipeScreen: React.FC<ScreenProps> = ({ route }) => {
  const { uri } = route.params;

  const recipe = titi.hits[0].recipe;
  const isLoading = false;
  const isFetching = false;

  //const { data, isLoading, isFetching } = useGetRecipeQuery({ uri });
  //const recipe = data && data.hits[0].recipe;

  return (
    <ScrollView>
      {(isFetching || isLoading) && (
        <ActivityIndicator animating={true} size="large" />
      )}
      {recipe && <RecipeDetailCard recipe={recipe} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  indicatorScrollView: { flex: 1, justifyContent: "center", height: "100%" },

  surface: {
    padding: 8,
    margin: 5,
  },
});

export default RecipeScreen;
