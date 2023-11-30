import { GraphContainer } from "@/styles/GraphStyles";
import React from "react";
import { BoxShadowContainer } from "@/styles/indexStyle";
import curvedLine from "../../public/Vector3.svg";
import Image from "next/image";
import useWindowSize from "@/ReactHooks/useWindowSize";
import { Doughnut } from "react-chartjs-2";
import ChartComponent from "./ChartComponent";

type Props = {};

const Graph = (props: Props) => {
  const { data } = useWindowSize();

  return (
    <BoxShadowContainer>
      <GraphContainer>
        {data > 650 ? (
          <div
            style={{
              color: "#3A3A3A;",
              padding: "2rem 2rem 1.75rem 2rem",
              fontSize: "22px",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            Earnings
          </div>
        ) : (
          ""
        )}

        {/* <Image
          src={curvedLine}
          alt="icons"
          style={{ width: "100%", height: "auto" }}
        /> */}
        <ChartComponent />
        <div
          style={{
            color: "black",
            padding: "0 2rem 1.75rem 2rem",
            fontWeight: "600",
            fontSize: "2rem",
          }}
        >
          SEK 2590
        </div>
      </GraphContainer>
    </BoxShadowContainer>
  );
};

export default Graph;
