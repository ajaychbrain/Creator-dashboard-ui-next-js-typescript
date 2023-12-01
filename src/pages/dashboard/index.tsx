import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";
import Graph from "@/components/Graph";
import { MainContainer } from "@/styles/indexStyle";
import CardComponent from "@/components/CardComponent";
import { CardsComponentContainer } from "@/styles/CardComponentStyles";
import data from "../../constants/TopProductData.json";
import postdata from "../../constants/TopPostData.json";
import storesdata from "../../constants/TopStoresData.json";
import ProductTitle from "@/components/ProductTitle";

type Props = {};

const Dashboard = (props: Props) => {
  const [selectedvalue, setSelectedValue] = useState<any>("This Month");
  const [selectedDate, setSelectedDate] = useState<any>();

  const getSelected = (value: any) => {
    setSelectedValue(value);
  };

  const getSelectedDate = (value: any) => {
    console.log(value);

    setSelectedDate(value);
    // setFromTo([startDate, endDate]);
  };
  return (
    <MainContainer>
      <ProductTitle title="My dashboard" display={true} />
      <div className="options of chart">
        <MainHeader
          getSelectedValue={getSelected}
          getSelectedDateValue={getSelectedDate}
          isApplyStyle={false}
        />
      </div>
      <div className="graph">
        <Graph selectedValue={selectedvalue} selectedDate={selectedDate} />
      </div>
      <CardsComponentContainer>
        <CardComponent data={data} title={"Top products"} />
        <CardComponent data={postdata} title={"Top posts"} />
        <CardComponent data={storesdata} title={"Top stores"} />
      </CardsComponentContainer>
    </MainContainer>
  );
};

export default Dashboard;
