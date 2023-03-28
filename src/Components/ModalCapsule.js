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
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faEarthAsia,
  faEnvelope,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function ModalCapsule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 모달 Modal Component
  return (
    <>
      <FontAwesomeIcon onClick={onOpen} className="fa" icon={faShareNodes} />
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
            <Flex alignItems="center">
              <Text mr={2}>
                <FontAwesomeIcon className="modal-title" icon={faEarthAsia} />
              </Text>
              <Text fontSize="md" as="b">
                Share
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="share-icon-wrap flex">
              <FontAwesomeIcon icon={faLink} size="2x" />
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <FontAwesomeIcon icon={faDiscord} size="2x" />
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
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
