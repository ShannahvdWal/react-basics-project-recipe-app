import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Divider,
  CardFooter,
  Center,
  Tag,
} from "@chakra-ui/react";
import { CautionWarnings } from "./CautionsWarnings";
import { CautionSafe } from "./CautionSafe";

export const RecipeCard = ({ item }) => {
  const hasWarnings = item.recipe.cautions.length > 0;
  return (
    <>
      <Card bg="white">
        <CardBody>
          <Image
            w="full"
            h="25em"
            objectFit="cover"
            src={item.recipe.image}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading align="center" size="lg">
              {item.recipe.label}
            </Heading>
            <Center>
              <p>
                {item.recipe.mealType} | {item.recipe.dishType}
              </p>
            </Center>
            <Center>
              {item.recipe.dietLabels.map((item) => {
                return (
                  <Tag paddingBlock="2" margin="1" size="md" key={item}>
                    {item}
                  </Tag>
                );
              })}
            </Center>
            <Center>
              {item.recipe.healthLabels
                .filter((item) => {
                  return item.includes("Vegetarian") || item.includes("Vegan");
                })
                .map((item) => {
                  return (
                    <Tag
                      bg="green.100"
                      paddingBlock="2"
                      margin="1"
                      size="md"
                      key={item}
                    >
                      {item}
                    </Tag>
                  );
                })}
            </Center>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Center>
            <div>
              {hasWarnings ? <CautionWarnings item={item} /> : <CautionSafe />}
            </div>
          </Center>
        </CardFooter>
      </Card>
    </>
  );
};
