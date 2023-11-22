import { OneCardComponent, TopContainer, TopContainerChild } from "@/styles/CardComponentStyles";
import { BoxShadowContainer } from "@/styles/indexStyle";
import React from "react";
import arrowSvg from "../../public/arrow.svg";
import productsvg from "../../public/product1.svg"
import Image from "next/image";

type Props = {};

const CardComponent = (props: Props) => {
  return (
    <BoxShadowContainer>
      <OneCardComponent>
        <TopContainer>
        Top Products
        <Image src={arrowSvg} style={{marginRight:'32px'}}  alt="icons" />
        </TopContainer>
        <TopContainerChild>
        <Image src={productsvg} alt="product" /> 
        <span>Nioxin Thickening Gel 140ml</span>
        <span>2SEK/Click</span>
        </TopContainerChild>
        <TopContainer>
        <span>Nioxin Thickening Gel 140ml</span>
        
        </TopContainer>
      </OneCardComponent>
    </BoxShadowContainer>
  );
};

export default CardComponent;
