import { Tag as CTag } from "@chakra-ui/react";
import { Image as CImage } from "@chakra-ui/react";

export const Image = ({ ...props }) => {
  return (
    <CImage
      w="full"
      h="25em"
      objectFit="cover"
      borderRadius="lg"
      mb="6"
      {...props}
    ></CImage>
  );
};

export const Tag = ({ ...props }) => {
  return (
    <CTag
      bg="green.400"
      color="white"
      paddingBlock="2"
      margin="1"
      size="md"
      {...props}
    ></CTag>
  );
};
