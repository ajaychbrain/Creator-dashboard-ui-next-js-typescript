import React from "react";
import MainHeader from "../../components/MainHeader"
import Graph from "@/components/Graph";
import { MainContainer } from "@/styles/indexStyle";
import CardComponent from "@/components/CardComponent";
import { CardsComponentContainer } from "@/styles/CardComponentStyles";
import data from "../../constants/TopProductData.json"
import postdata from "../../constants/TopPostData.json"
import storesdata from "../../constants/TopStoresData.json"


type Props = {};

const Dashboard = (props: Props) => {
  return (
    <MainContainer>
      <div className="options of chart">
        <MainHeader/>
      </div>
      <div className="graph">
        <Graph />
      </div>
      <CardsComponentContainer>
        <CardComponent data={data} title={"Top products"}  />
        <CardComponent data={postdata} title={"Top posts"}/>
        <CardComponent data={storesdata} title={"Top stores"}/>
      </CardsComponentContainer>
    </MainContainer>
  );
};

export default Dashboard;
