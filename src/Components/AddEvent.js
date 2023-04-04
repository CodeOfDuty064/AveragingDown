import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Checkbox,
  CheckboxGroup,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function AddEvent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 종목 추가 Modal Component
  return (
    <>
      <FontAwesomeIcon
        className="fa-spin"
        onClick={onOpen}
        icon={faGear}
        size="xl"
      />
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
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <div className="flex">
              <Stack spacing={5} direction="row">
                <Checkbox colorScheme="red" defaultChecked>
                  Checkbox
                </Checkbox>
              </Stack>
            </div>
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
