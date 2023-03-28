import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// components
import Header from "../Components/Header"; // 헤더 Header
import Footer from "../Components/Footer"; // 푸터 Footer
import Calculator from "../Components/Calculator"; // 계산기 Componenet
import Graph from "../Components/Graph"; // 사용자 평단 Before & After Component
import Share from "../Components/Share"; // SNS Share Component
import Chart from "../Components/Chart"; // 메이저 종목 시세 Chart

// css
import "../css/reset.css"; // reset css UI 침해시 삭제
import "../css/common.css";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="body-box">
        <Header />
        <div className="content-box">
          <Calculator />
          {/* <Graph />
          <Share />
          <Chart /> */}
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
