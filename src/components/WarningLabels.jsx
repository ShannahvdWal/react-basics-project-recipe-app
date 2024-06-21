import { Tag } from "@chakra-ui/react";

export const WarningLabels = ({ item }) => {
  return item.recipe.cautions.map((item) => {
    return (
      <Tag
        bg="red.400"
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
