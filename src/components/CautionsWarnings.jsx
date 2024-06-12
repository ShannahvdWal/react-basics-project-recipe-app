import { WarningTwoIcon } from "@chakra-ui/icons";

export const CautionWarnings = ({ item }) => {
  return (
    <>
      <WarningTwoIcon marginRight="4" w={8} h={8} color="red.500" />
      {item.recipe.cautions.join(", ")}
    </>
  );
};
