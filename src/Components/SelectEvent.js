import React from "react";
import {
  Select,
  Flex,
  Box,
  Button,
  useColorMode,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
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
            <AddEvent />
          </Button>
        </Tooltip>
      </Flex>
    </>
  );
}
