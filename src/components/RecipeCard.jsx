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
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { CautionWarnings } from "./CautionsWarnings";
import { CautionSafe } from "./CautionSafe";
import { RecipePage } from "../pages/RecipePage";

export const RecipeCard = ({ item }) => {
  const hasWarnings = item.recipe.cautions.length > 0;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Card bg="white">
        <CardBody>
          <Image
            onClick={handleClick}
            w="full"
            h="25em"
            objectFit="cover"
            src={item.recipe.image}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading onClick={handleClick} align="center" size="lg">
              {item.recipe.label}
            </Heading>
            <RecipePage item={item}></RecipePage>
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
            <Button onClick={handleClick} w="80%">
              View full recipe
            </Button>
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

      <RecipePage item={item} onClose={onClose} isOpen={isOpen} />
    </>
  );
};
