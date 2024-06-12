import { Center, Input } from "@chakra-ui/react";

export const SearchBar = ({ setQuery }) => {
  return (
    <Center>
      <Input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for recipes"
        _placeholder={{ color: "blue.300" }}
        color="blue.300"
        size="lg"
        bg="white"
        w="80%"
        marginBlock="4"
        padding="4"
      />
    </Center>
  );
};
