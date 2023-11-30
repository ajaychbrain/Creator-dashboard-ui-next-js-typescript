import useWindowSize from "@/ReactHooks/useWindowSize";
import {
  TopAllTitleContainer,
  TopContainer,
} from "@/styles/CardComponentStyles";
import React from "react";
import TopMobileHeader from "./TopMobileHeader";

type Props = {
  title: string;
  display?: boolean;
};

const ProductTitle = (props: Props) => {
  const { data } = useWindowSize();
  return (
    <>
      {props.display ? (
        data > 426 ? (
          ""
        ) : (
          <TopMobileHeader title={props.title} link={"/"} close={"/"} />
        )
      ) : data > 1024 ? (
        <TopAllTitleContainer $marginBottom={true}>
          <TopContainer $bold={true}>{props.title}</TopContainer>
        </TopAllTitleContainer>
      ) : (
        <TopMobileHeader
          title={props.title}
          link={"/dashboard"}
          close={"/dashboard"}
        />
      )}
    </>
  );
};

export default ProductTitle;
