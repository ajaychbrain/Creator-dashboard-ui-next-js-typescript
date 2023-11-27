import { GraphContainer } from "@/styles/GraphStyles";
import React from "react";
import { BoxShadowContainer } from "@/styles/indexStyle";
import curvedLine from "../../public/Vector3.svg";
import Image from "next/image";

type Props = {};

const Graph = (props: Props) => {
  return (
    <BoxShadowContainer>
      <GraphContainer>
        <Image src={curvedLine} alt="icons" style={{ width: "100%" }} />
        {/* <ChartComponent /> */}
      </GraphContainer>
    </BoxShadowContainer>
  );
};

export default Graph;
