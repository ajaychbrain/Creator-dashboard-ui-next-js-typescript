import SearchContainer from "@/components/SearchContainer";
import {
  FlexContainerCard,
  OneCardComponent,
  TopAllTitleContainer,
  TopContainer,
  TopContainerChild,
  TopMainContainer,
} from "@/styles/CardComponentStyles";
import { BoxShadowContainer, MainContainer } from "@/styles/indexStyle";
import { Data } from "@/types";
import Image from "next/image";
import React from "react";
import defaultProductImage from "../../public/defaultProductImage.png";

interface Props {
  productData: Data[];
  title: string;
}

const AllTopProducts = (props: Props) => {
  return (
    <>
      <MainContainer>
        <SearchContainer />
        <BoxShadowContainer>
          <OneCardComponent>
            <>
              <TopAllTitleContainer>
                <TopContainer $bold={true}>{props.title}</TopContainer>
              </TopAllTitleContainer>
              {props.productData.map((item: Data) => {
                return (
                  <TopMainContainer key={item.id}>
                    <TopContainerChild>
                      <Image
                        src={item.image || defaultProductImage}
                        alt={item.name}
                        width={25}
                        height={25}
                      />
                      <div>
                        <TopContainer>{item.name}</TopContainer>
                        <div>
                          <TopContainer
                            $background="#f4f0ec"
                            $bold={true}
                            $padding={true}
                          >
                            {item.percent + "%"}
                          </TopContainer>
                          <TopContainer>{" " + item.type}</TopContainer>
                        </div>
                      </div>
                    </TopContainerChild>

                    <FlexContainerCard>
                      <TopContainer $bold={true}>SEK {item.price}</TopContainer>
                      <TopContainer>CSV{item.cvrPercent}</TopContainer>
                    </FlexContainerCard>
                  </TopMainContainer>
                );
              })}
            </>
          </OneCardComponent>
        </BoxShadowContainer>
      </MainContainer>
    </>
  );
};

export default AllTopProducts;

export async function getServerSideProps(context: any) {
  //   console.log(context.params);
  // console.log("enter");
  // const params = context.params;

  const response = await fetch(`http://localhost:3001/api/topgetproducts`);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      productData: data,
      title: "Top Products",
    },
  };
}
