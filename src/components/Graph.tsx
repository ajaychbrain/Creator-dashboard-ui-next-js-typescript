import { GraphContainer } from "@/styles/GraphStyles";
import React, { useEffect, useState } from "react";
import { BoxShadowContainer } from "@/styles/indexStyle";
import curvedLine from "../../public/Vector3.svg";
import Image from "next/image";
import useWindowSize from "@/ReactHooks/useWindowSize";
import { Doughnut } from "react-chartjs-2";
import ChartComponent from "./ChartComponent";
import myGraphData from "../constants/GraphData.json";

type Props = {
  selectedValue: string;
  selectedDate: any;
};

const Graph = (props: Props) => {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    const dataGrapth = myGraphData.grapmaindata.filter((item: any) => {
      return item.name === props.selectedValue;
    });

    setGraphData(dataGrapth[0]);
    console.log(dataGrapth, props.selectedValue, "Props Value There!");

    if (props.selectedDate && props.selectedValue == "") {
      console.log("Test");
      const valueData = props.selectedDate.split(" ");
      console.log(valueData, "split");
      const startDate = valueData[0] + valueData[1];
      const endDate = valueData[3] + valueData[4];
      const date = startDate + " " + endDate;

      const dataGrapth = myGraphData.grapmaindata.filter((item: any) => {
        return item.name === "1stOct 30thNov";
      });
      setGraphData(dataGrapth[0]);
    }
  }, [props.selectedValue, props.selectedDate]);

  console.log(graphData, "GraphData");

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

        <ChartComponent
          selectedValue={graphData}
          selectedDate={props.selectedDate}
        />
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
