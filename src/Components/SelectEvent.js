import React from "react";
import {
  Select,
  Flex,
  Box,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import AddEvent from "./AddEvent"; // 종목 추가 Modal Component

import "../css/selectevent.css";

export default function Selected() {
  // 종목선택 모달창
  const { onOpen, isOpen, onClose } = useDisclosure();
  // 종목 선택 Select Box Component
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex>
        <Box flex="1" bg="white">
          <div
            className={
              colorMode === "light" ? "select-light-wrap" : "select-dark-wrap"
            }
          >
            <Select
              placeholder="종목 선택"
              size="md"
              color={colorMode === "light" ? "gray.400" : "gray.500"}
              bg={colorMode === "light" ? "#fff" : "#303134"}
            />
          </div>
        </Box>
        <AddEvent />
      </Flex>
    </>
  );
}
