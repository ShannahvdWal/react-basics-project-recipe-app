import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { WarningLabels } from "../components/WarningLabels";
import { CautionSafe } from "../components/CautionSafe";
import { DietLabels } from "../components/DietLabels";
import { NoDiets } from "../components/NoDiets";
import { Image, Tag } from "../components/ui/RecipePageStyling";
import { RecipeCardInfoLeft } from "../components/RecipeCardInfoLeft";

export function RecipePage({ item, onClose, isOpen }) {
  const hasWarnings = item.recipe.cautions.length > 0;
  const hasDiets = item.recipe.dietLabels.length > 0;

  return (
    <>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="blue.100">
          <Center>
            <Box p="4" bg="white" w="80%" h="100%">
              <ModalCloseButton color="white" />
              <ModalBody>
                <Image src={item.recipe.image} />
                <Flex wrap="wrap" gap="10">
                  <Box flex="1">
                    <RecipeCardInfoLeft item={item} />
                  </Box>
                  <Box flex="1">
                    <p>Cautions:</p>
                    {hasWarnings ? (
                      <WarningLabels item={item} />
                    ) : (
                      <CautionSafe />
                    )}
                    <p>Health Labels:</p>
                    {item.recipe.healthLabels.map((item) => {
                      return <Tag key={item}>{item}</Tag>;
                    })}
                    <p>Diet:</p>
                    {hasDiets ? <DietLabels item={item} /> : <NoDiets />}
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
