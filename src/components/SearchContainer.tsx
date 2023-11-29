import {
  ButtonStyled,
  CaretLeftandLinkContainer,
  HeadingContainer,
  HeadingContainerMain,
  LeftImageTest,
  LinkStyle,
  ScrollContainer,
  SearchLinkContainer,
  SearchMainContainer,
} from "@/styles/indexStyle";
import { useRouter } from "next/router";
import React from "react";
import MainHeader from "./MainHeader";
import useWindowSize from "@/ReactHooks/useWindowSize";

type Props = {
  isApplyStyle: boolean;
};

const SearchContainer = (props: Props) => {
  const router = useRouter();
  console.log(router, "router");
  const { data } = useWindowSize();
  return (
    <>
      <SearchMainContainer>
        <HeadingContainerMain $applyStyle={false} $applyPadding={false}>
          <ScrollContainer>
            {data > 1024 ? (
              <CaretLeftandLinkContainer>
                <LinkStyle href="/dashboard">
                  <LeftImageTest
                    src="/arrow.svg"
                    alt="caretrightarrow"
                    width={15}
                    height={15}
                  />
                </LinkStyle>
                <SearchLinkContainer>
                  <ButtonStyled
                    $padding={true}
                    $isSelected={"/topproducts" === router.pathname}
                  >
                    <LinkStyle href="/topproducts">Top products</LinkStyle>
                  </ButtonStyled>
                  <ButtonStyled
                    $padding={true}
                    $isSelected={"/topposts" === router.pathname}
                  >
                    <LinkStyle href="/topposts">Top posts</LinkStyle>
                  </ButtonStyled>
                  <ButtonStyled
                    $padding={true}
                    $isSelected={"/topstores" === router.pathname}
                  >
                    <LinkStyle href="/topstores">Top stores</LinkStyle>
                  </ButtonStyled>
                </SearchLinkContainer>
              </CaretLeftandLinkContainer>
            ) : (
              ""
            )}

            <MainHeader isApplyStyle={false} />
          </ScrollContainer>
        </HeadingContainerMain>
      </SearchMainContainer>
    </>
  );
};

export default SearchContainer;
