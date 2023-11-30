import { TopAllTitleContainer } from "@/styles/CardComponentStyles";
import { LeftImageTest, LinkStyle } from "@/styles/indexStyle";
import React from "react";

type Props = {
  title: string;
  link: string;
  close: string;
};

const TopMobileHeader = (props: Props) => {
  return (
    <>
      <TopAllTitleContainer $marginBottom={false}>
        <LinkStyle href={props.link}>
          <LeftImageTest
            src="/rightimg.svg"
            alt="rightimg"
            width={15}
            height={15}
          />
        </LinkStyle>

        <span>{props.title}</span>
        <LinkStyle href={props.close}>
          <LeftImageTest src="/close.svg" alt="close" width={15} height={15} />
        </LinkStyle>
      </TopAllTitleContainer>
    </>
  );
};

export default TopMobileHeader;
