import { Heading } from "@chakra-ui/react";

export const RecipeCardInfoLeft = ({ item }) => {
  return (
    <>
      <Heading mb="5">{item.recipe.label}</Heading>
      <p>
        <b>Meal type:</b> {item.recipe.mealType}
      </p>
      <p>
        <b>Dish type:</b> {item.recipe.dishType}
      </p>
      <p>
        <b>Total cooking time:</b> {item.recipe.totalTime}
      </p>
      <p>
        <b>Servings:</b> {item.recipe.yield}
      </p>
      <p>
        <Heading size="md">Total Nutrients:</Heading>
        <p>
          <b>{item.recipe.totalNutrients.ENERC_KCAL.label}: </b>
          {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity)}
          {item.recipe.totalNutrients.ENERC_KCAL.unit}
        </p>
        <p>
          <b>{item.recipe.totalNutrients.PROCNT.label}: </b>
          {Math.round(item.recipe.totalNutrients.PROCNT.quantity)}
          {item.recipe.totalNutrients.PROCNT.unit}
        </p>
        <p>
          <b>{item.recipe.totalNutrients.FAT.label}: </b>
          {Math.round(item.recipe.totalNutrients.FAT.quantity)}
          {item.recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          <b>{item.recipe.totalNutrients.CHOCDF.label}: </b>
          {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
          {item.recipe.totalNutrients.CHOCDF.unit}
        </p>
        <p>
          <b>{item.recipe.totalNutrients.CHOLE.label}: </b>
          {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
          {item.recipe.totalNutrients.CHOLE.unit}
        </p>
        <p>
          <b>{item.recipe.totalNutrients.NA.label}: </b>
          {Math.round(item.recipe.totalNutrients.NA.quantity)}
          {item.recipe.totalNutrients.NA.unit}
        </p>
      </p>
      <p>
        <Heading size="md">Ingredients:</Heading>
        {item.recipe.ingredientLines.map((item) => {
          return (
            <>
              <li>{item}</li>
            </>
          );
        })}
      </p>
    </>
  );
};
