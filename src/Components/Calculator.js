import React, { useState, useEffect, useRef } from "react";
import SelectEvent from "./SelectEvent"; // 종목 선택 Select Box Component
import AddEvent from "./AddEvent"; // 종목 추가 Modal Component
// css
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  InputRightElement,
} from "@chakra-ui/react";
import "../css/calculator.css";
import { CheckIcon } from "@chakra-ui/icons";
import { inherits } from "@babel/types";
export default function Calculator() {
  // 코인 물타기 계산기 Component
  const [unitAmountValue, setUnitAmountValue] = useState(""); // 보유평단
  const [unitPriceValue, setUnitPriceValue] = useState(""); // 보유수량
  const [unitTotalValue, setUnitTotalValue] = useState(""); // 보유총액
  const [addAmountValue, setAddAmountValue] = useState(""); // 추가평단
  const [addPriceValue, setAddPriceValue] = useState(""); // 추가수량
  const [addTotalValue, setAddTotalValue] = useState(""); // 추가총액
  const { colorMode, toggleColorMode } = useColorMode();

  // 보유 평단
  const checkUnitPrice = async (event) => {
    setUnitPriceValue(event.target.value);
  };

  // 보유수량
  const checkUnitAmount = async (event) => {
    setUnitAmountValue(event.target.value);
  };

  // 추가 가격
  const checkAddPrice = async (event) => {
    setAddPriceValue(event.target.value);
  };

  // 추가 수량
  const checkAddAmount = async (event) => {
    setAddAmountValue(event.target.value);
  };

  // Unit section - 소유
  useEffect(() => {
    if (unitPriceValue !== "" || unitPriceValue !== undefined) {
      console.log(unitPriceValue);
    }

    if (unitAmountValue !== "" || unitAmountValue !== undefined) {
      console.log(unitAmountValue);
    }

    if (unitPriceValue !== "" && unitAmountValue !== "") {
      setUnitTotalValue(unitPriceValue * unitAmountValue);
    }
  }, [unitAmountValue, unitPriceValue]);

  // Add section - 추가
  useEffect(() => {
    if (addAmountValue !== "" || addAmountValue !== undefined) {
      console.log(addAmountValue);
    }

    if (addPriceValue !== "" || addPriceValue !== undefined) {
      console.log(addPriceValue);
    }

    if (addAmountValue !== "" && addPriceValue !== "") {
      setAddTotalValue(addAmountValue * addPriceValue);
    }
  }, [addAmountValue, addPriceValue]);

  return (
    <>
      <Grid
        h="700px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        marginTop="4rem"
        className="container"
      >
        <GridItem
          className={
            colorMode === "light"
              ? "calculator-light-box"
              : "calculator-dark-box"
          }
          rowSpan={2}
          colSpan={3}
          bg={colorMode === "light" ? "#fff" : "#1B1B1E"}
          p="3rem"
        >
          <SelectEvent />
          <Grid
            h="150px"
            marginTop="1rem"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={2}>
              <label className="input-title">보유평단</label>
              {/* 보유 평단 Input */}
              <InputGroup>
                <InputLeftElement
                  type="number"
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="₩"
                />
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  bg={colorMode === "light" ? "#fff" : "#303134"}
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  type="number"
                  placeholder="0"
                  value={unitPriceValue}
                  onChange={checkUnitPrice}
                  borderColor="#303134"
                  _placeholder={{ opacity: 0.6, color: "#fff" }}
                />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <label className="input-title">보유수량</label>
              {/* 보유 수량 Input */}
              <InputGroup>
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  bg={colorMode === "light" ? "#fff" : "#303134"}
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  type="number"
                  placeholder="0"
                  value={unitAmountValue}
                  onChange={checkUnitAmount}
                  borderColor="#303134"
                  _placeholder={{ opacity: 0.6, color: "#fff" }}
                />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={4}>
              <label className="input-title">총액</label>
              {/* 보유 총 액 Input */}
              <InputGroup>
                <InputLeftElement
                  type="number"
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="₩"
                />
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  bg={colorMode === "light" ? "#fff" : "#303134"}
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  type="number"
                  placeholder="0"
                  value={unitTotalValue}
                  borderColor="#303134"
                  _placeholder={{ opacity: 0.6, color: "#fff" }}
                  readOnly
                />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </GridItem>
          </Grid>

          <Grid
            h="150px"
            marginTop="1rem"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={2}>
              <label className="input-title">가격</label>
              {/* 추가 매수 금액 Input */}
              <InputGroup>
                <InputLeftElement
                  type="number"
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="₩"
                />
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  bg={colorMode === "light" ? "#fff" : "#303134"}
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  type="number"
                  placeholder="0"
                  borderColor="#303134"
                  _placeholder={{ opacity: 0.6, color: "#fff" }}
                  value={addPriceValue}
                  onChange={checkAddPrice}
                />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <label className="input-title">추가 수량</label>
              {/* 추가 매수 수량 Input */}
              <InputGroup>
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  bg={colorMode === "light" ? "#fff" : "#303134"}
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  type="number"
                  placeholder="0"
                  borderColor="#303134"
                  _placeholder={{ opacity: 0.6, color: "#fff" }}
                  value={addAmountValue}
                  onChange={checkAddAmount}
                />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </GridItem>
            <GridItem colSpan={4}>
              <label className="input-title">총액</label>
              {/* 추가 매수 총 금액 Input */}
              <InputGroup>
                <InputLeftElement
                  type="number"
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="₩"
                />
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  bg={colorMode === "light" ? "#fff" : "#303134"}
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  type="number"
                  placeholder="0"
                  borderColor="#303134"
                  _placeholder={{ opacity: 0.6, color: "#fff" }}
                  readOnly
                  value={addTotalValue}
                />
                <InputRightElement children={<CheckIcon color="green.500" />} />
              </InputGroup>
            </GridItem>
          </Grid>
          <Grid
            h="150px"
            marginTop="1rem"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={1}
          >
            <GridItem>
              <label className="input-title">총 수량</label>
              <InputGroup
                className="number-input"
                bg={colorMode === "light" ? "#fff" : "#303134"}
              >
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  placeholder="총 보유 수량"
                  bg={colorMode === "light" ? "#F9FAFB" : "#303134"}
                  readOnly
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <label className="input-title">최종 평단</label>
              <InputGroup
                className="number-input"
                bg={colorMode === "light" ? "#fff" : "#303134"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  fontSize="1em"
                  children="₩"
                />
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  placeholder="최종 평단"
                  bg={colorMode === "light" ? "#F9FAFB" : "#303134"}
                  readOnly
                />
              </InputGroup>
            </GridItem>
            <GridItem>
              <label className="input-title">최종 금액</label>
              <InputGroup
                className="number-input"
                bg={colorMode === "light" ? "#fff" : "#303134"}
              >
                <InputLeftElement
                  pointerEvents="none"
                  color={colorMode === "light" ? "gray.500" : "gray.300"}
                  fontSize="1em"
                  children="₩"
                />
                <Input
                  className={
                    colorMode === "light"
                      ? "calculator-light-input"
                      : "calculator-dark-input"
                  }
                  placeholder="최종 총액"
                  bg={colorMode === "light" ? "#F9FAFB" : "#303134"}
                  readOnly
                />
              </InputGroup>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem
          className="advertisement-box"
          rowSpan={1}
          colSpan={2}
          bg={colorMode === "light" ? "#F9FAFB" : "#303134"}
        />
        <GridItem
          className="advertisement-box"
          rowSpan={1}
          colSpan={2}
          bg={colorMode === "light" ? "#F9FAFB" : "#303134"}
        />
      </Grid>
      {/* <AddEvent /> */}
    </>
  );
}
