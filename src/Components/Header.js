import React from "react";
import { Button, useDisclosure, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faShareNodes, faSun } from "@fortawesome/free-solid-svg-icons";
import ModalCapsule from "../Components/ModalCapsule"; // 모달 Modal

const handleSubmit = (event) => {
  event.preventDefault();
};

export default function Header() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // 헤더 Header Component
  return (
    <>
      <header className="header flex">
        <div className="container">
          <h1>Averaging Down</h1>
          <div className="header-icon-wrap flex flex-wrap">
            <ModalCapsule
              onClick={onOpen}
              id={1}
              modalType={"share"}
              isOpen={true}
            />
            <Button
              onClick={toggleColorMode}
              backgroundColor="transparent"
              width="fit-content"
              height="fit-content"
              p="0"
              _hover={{ bg: "transparent" }}
            >
              {colorMode === "light" ? (
                <FontAwesomeIcon className="fa" icon={faMoon} />
              ) : (
                <FontAwesomeIcon className="fa" icon={faSun} />
              )}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
