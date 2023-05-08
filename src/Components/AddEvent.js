import Reac, { useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  useColorMode,
  Tooltip
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { AddIcon } from "@chakra-ui/icons";

export default function AddEvent() {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [unitPriceValue, setUnitPriceValue] = useState(""); // 보유수량

  // 종목 추가 Modal Component
  return (
    <>
      <Tooltip
        hasArrow
        label="종목 추가"
        aria-label="Add Event"
        placement="top"
        bg={colorMode === "light" ? "gray.300" : "gray.600"}
        color={colorMode === "light" ? "gray.600" : "gray.200"}
        borderRadius="5px"
        p="5px 10px"
        fontWeight="500"
      >
      <Button
        bg={colorMode === "light" ? "#fff" : "1B1B1E"}
        color={colorMode === "light" ? "gray.500" : "gray.300"}
        _hover={
          colorMode === "light"
            ? { bg: "#fff", color: "gray.700" }
            : { bg: "#1B1B1E", color: "gray.50" }
        }
        >
        <FontAwesomeIcon
          className="fa-spin"
          onClick={onOpen}
          icon={faGear}
          size="xl"
        />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered // 가운데 정렬
        motionPreset="scale" // 위에서 아래로 애니메이션
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex alignItems="center"></Flex>
          </ModalHeader>
          <ModalBody>
            <div className="flex">
              <Stack spacing={5} direction="row">
                <CheckboxGroup>
                  <Checkbox colorScheme="red" size="lg"/>
                </CheckboxGroup>
                <GridItem rowSpan={1} colSpan={2}>
                  {/* 종목 Input */}
                  <InputGroup>
                    <Input
                      className={
                        colorMode === "light"
                          ? "calculator-light-input"
                          : "calculator-dark-input"
                      }
                      bg={colorMode === "light" ? "#fff" : "#303134"}
                      color={colorMode === "light" ? "gray.500" : "gray.300"}
                      type="text"
                      placeholder="종목"
                      // value={unitPriceValue}
                      // onChange={}
                      borderColor="#303134"
                      _placeholder={{ opacity: 0.6, color: "#fff" }}
                    />
                  </InputGroup>
                </GridItem>
              </Stack>
            </div>
            <Flex alignItems="center" justify="center" marginTop="1rem">
              <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='ghost'>
                  <AddIcon boxSize={4} />
                </Button>
              </Stack>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Delete
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            {/* 삭제 */}
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
