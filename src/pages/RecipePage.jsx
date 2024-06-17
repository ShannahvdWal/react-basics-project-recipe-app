import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Heading,
  ModalOverlay,
  Tag,

} from "@chakra-ui/react";

export function RecipePage({ item, onClose, isOpen }) {
  return (
    <>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="blue.100">
          <Center>
            <Box p="4" bg="white" w="80%" h="100%">
              <ModalCloseButton />
              <ModalBody>
                <Image
                  w="full"
                  h="25em"
                  objectFit="cover"
                  src={item.recipe.image}
                  borderRadius="lg"
                  mb="4"
                />

                <Flex wrap="wrap">
                  <Box flex="1">
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
                  </Box>
                  <Box flex="1">
                    <p>Health Labels:</p>

                    {item.recipe.healthLabels.map((item) => {
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
                    <p>Diet:</p>
                    {item.recipe.dietLabels.map((item) => {
                      return (
                        <Tag paddingBlock="2" margin="1" size="md" key={item}>
                          {item}
                        </Tag>
                      );
                    })}
                  </Box>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </Box>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
