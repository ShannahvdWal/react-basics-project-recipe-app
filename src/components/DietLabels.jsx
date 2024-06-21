import { Tag } from "@chakra-ui/react";

export const DietLabels = ({ item }) => {
  return item.recipe.dietLabels.map((item) => {
    return (
      <Tag
        bg="yellow.400"
        color="white"
        paddingBlock="2"
        margin="1"
        size="md"
        key={item}
      >
        {item}
      </Tag>
    );
  });
};
