import {
  HeadLinkContainer,
  OneCardComponent,
  ProductColumnContainer,
  ProductContainer,
  TopContainer,
  TopContainerChild,
  TopContainertextchild,
  TopMainContainer,
} from "@/styles/CardComponentStyles";
import { BoxShadowContainer } from "@/styles/indexStyle";
import React from "react";
import arrowSvg from "../../public/arrow.svg";
import productsvg from "../../public/product1.svg";
import Image from "next/image";
import { characterStringCheck } from "@/utility";
import { Data } from "@/types";

interface PostDataProps {
  data: Data[];
  title: string;
}

interface StoresDataProps {
  data: Data[];
  title: string;
}

interface ProductDataProps {
  data: Data[];
  title: string;
}

type PropsData = StoresDataProps | PostDataProps | ProductDataProps;

////////////TYPE GUARD/////////////////
const isString = (value: any): value is string =>
  typeof value === "string" || value === undefined;

const isPostData = (data: any): data is PostDataProps => {
  return isString(data.data.length > 0 ? data.data[0]?.image : null);
};

const isStoresData = (data: any): data is StoresDataProps => {
  // console.log(data);
  return isString(data.data.length > 0 ? data.data[0]?.image : null);
};

const isProductData = (data: any): data is ProductDataProps => {
  return isString(data.data.length > 0 ? data.data[0]?.image : null);
};

const CardComponent = (props: PropsData) => {
  console.log(props, "Hello Data");

  if (props.title === "Top products" && isProductData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent
          $height="430px"
          $overflowY={true}
          $isheightChange={true}
        >
          <>
            <HeadLinkContainer href={"/topproducts"}>
              <TopContainer style={{ fontWeight: "600" }}>
                {props.title}
              </TopContainer>
              <Image src={arrowSvg} alt="icons" />
            </HeadLinkContainer>

            {props.data.map((item: any) => {
              const checkString = characterStringCheck(item.name);
              return (
                <>
                  <TopMainContainer>
                    <TopContainerChild>
                      <Image
                        src={item.image}
                        alt="product"
                        width={40}
                        height={40}
                      />

                      <div>
                        <ProductContainer $bold={true}>
                          {checkString}
                        </ProductContainer>
                        <div>
                          <ProductContainer
                            $background="#f4f0ec"
                            $bold={true}
                            $padding={true}
                          >
                            {item.percent}%
                          </ProductContainer>
                          <ProductContainer>{" " + item.type}</ProductContainer>
                        </div>
                      </div>
                    </TopContainerChild>
                    <ProductColumnContainer>
                      <ProductContainer $bold={true}>
                        SEK {item.price}
                      </ProductContainer>
                      <ProductContainer>CSV{item.cvrPercent}</ProductContainer>
                    </ProductColumnContainer>
                  </TopMainContainer>
                </>
              );
            })}
          </>
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }

  if (props.title === "Top posts" && isPostData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent
          $height="430px"
          $overflowY={true}
          $isheightChange={true}
        >
          <>
            <HeadLinkContainer href={"/topposts"}>
              <TopContainer style={{ fontWeight: "600" }}>
                {props.title}
              </TopContainer>
              <Image src={arrowSvg} alt="icons" />
            </HeadLinkContainer>

            {props.data.map((item: any) => {
              const checkString = characterStringCheck(item.name);
              return (
                <>
                  <TopMainContainer $padding="0.92rem 2rem">
                    <TopContainerChild>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                      />

                      <ProductContainer $bold={true}>
                        {checkString}
                      </ProductContainer>
                    </TopContainerChild>
                    <ProductColumnContainer>
                      <ProductContainer>SEK{item.price}</ProductContainer>
                    </ProductColumnContainer>
                  </TopMainContainer>
                </>
              );
            })}
          </>
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }

  if (props.title === "Top stores" && isStoresData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent
          $height="430px"
          $overflowY={true}
          $isheightChange={true}
        >
          <>
            <HeadLinkContainer href={"/topstores"}>
              <TopContainer style={{ fontWeight: "600" }}>
                {props.title}
              </TopContainer>

              <Image src={arrowSvg} alt="icons" />
            </HeadLinkContainer>

            {props.data.map((item: any) => {
              return (
                <>
                  <TopMainContainer key={item.id} $padding="1.35rem 2rem">
                    <TopContainerChild>
                      <ProductContainer $bold={true}>
                        {item.name}
                      </ProductContainer>
                    </TopContainerChild>
                    <ProductColumnContainer>
                      <ProductContainer>SEK {item.price}</ProductContainer>
                    </ProductColumnContainer>
                  </TopMainContainer>
                </>
              );
            })}
          </>
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }

  // if (props.title === "Top posts") {
  //   return (
  //     <BoxShadowContainer>
  //       <OneCardComponent>
  //         <TopContainer>
  //           <span
  //             style={{
  //               color: "#3A3A3A",
  //               fontFamily: "Strawford",
  //               fontSize: "22px",
  //               fontStyle: "normal",
  //               fontWeight: "1000",
  //               lineHeight: "normal",
  //             }}
  //           >
  //             {props.title}
  //           </span>
  //           <Image src={arrowSvg} alt="icons" />
  //         </TopContainer>
  //         {props.data.map((item: any) => {
  //           return (
  //             <>
  //               <TopContainerChild>
  //                 <div>
  //                   <Image
  //                     src={item.image}
  //                     alt="product"
  //                     width={50}
  //                     height={50}
  //                   />
  //                 </div>
  //                 <div>
  //                   <span>{item.name}</span>
  //                   <TopContainertext>
  //                     <TopContainertextchild>
  //                       <span>{item.percent}</span>
  //                     </TopContainertextchild>
  //                     <TopContainertextchild>
  //                       <span>{item.type}</span>
  //                     </TopContainertextchild>
  //                   </TopContainertext>
  //                 </div>
  //                 <div>
  //                   <span>{item.price}</span>
  //                   <TopContainertext>
  //                     <span>{item.cvrPercent}</span>
  //                     <TopContainertextchild></TopContainertextchild>
  //                   </TopContainertext>
  //                 </div>
  //               </TopContainerChild>
  //             </>
  //           );
  //         })}
  //       </OneCardComponent>
  //     </BoxShadowContainer>
  //   );
  // }

  // if (props.title === "Top stores") {
  //   return (
  //     <BoxShadowContainer>
  //       <OneCardComponent>
  //         <TopContainer>
  //           <span
  //             style={{
  //               color: "#3A3A3A",
  //               fontFamily: "Strawford",
  //               fontSize: "22px",
  //               fontStyle: "normal",
  //               fontWeight: "1000",
  //               lineHeight: "normal",
  //             }}
  //           >
  //             {props.title}
  //           </span>
  //           <Image src={arrowSvg} alt="icons" />
  //         </TopContainer>
  //         {props.data.map((item: any) => {
  //           return (
  //             <>
  //               <TopContainerChild>
  //                 <div>
  //                   <span>{item.name}</span>
  //                   <TopContainertext>
  //                     <TopContainertextchild>
  //                       <span>{item.type}</span>
  //                     </TopContainertextchild>
  //                   </TopContainertext>
  //                 </div>
  //                 <div>
  //                   <span>{item.price}</span>
  //                   <TopContainertext>
  //                     <span>{item.cvrPercent}</span>
  //                     <TopContainertextchild></TopContainertextchild>
  //                   </TopContainertext>
  //                 </div>
  //               </TopContainerChild>
  //             </>
  //           );
  //         })}
  //       </OneCardComponent>
  //     </BoxShadowContainer>
  //   );
  // }
};

export default CardComponent;
