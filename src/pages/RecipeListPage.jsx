import { Heading, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

export const RecipeListPage = () => {
  const [query, setQuery] = useState(" ");

  return (
    <>
      <Box bg="white" w="100%" p={4} color="blue.200" marginBlock="2">
        <Heading align="center">Your Recipe App</Heading>
      </Box>
      <Flex alignItems="center" gap="2">
        <Box bg="blue.100" w="100%" p={4} color="white">
          <SearchBar setQuery={setQuery} />
          <SimpleGrid columns={[1, null, 2, null, 3]} spacing="40px">
            {data.hits
              .filter((item) => {
                return query.toLowerCase() === " "
                  ? item
                  : item.recipe.label.toLowerCase().includes(query);
              })
              .map((item) => (
                <RecipeCard item={item} key={item.recipe.label} />
              ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};
