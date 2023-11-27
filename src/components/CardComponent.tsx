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
          $height="440px"
          $overflowY={true}
          $isheightChange={true}
        >
          <HeadLinkContainer href={"/topproducts"}>
            <TopContainer $bold={true}>{props.title}</TopContainer>
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
                      width={50}
                      height={50}
                    />

                    <div>
                      <ProductContainer>
                        <span className="product-text">{checkString}</span>
                      </ProductContainer>
                      <div>
                        <ProductContainer>
                          <span className="product-precent">
                            {item.percent}%
                          </span>
                        </ProductContainer>
                        <ProductContainer>
                          <span className="product-type">{item.type}</span>
                        </ProductContainer>
                      </div>
                    </div>
                  </TopContainerChild>
                  <ProductColumnContainer>
                    <ProductContainer>
                      <span className="product-price">SEK {item.price}</span>
                    </ProductContainer>
                    <ProductContainer>
                      <span className="product-cv">
                        {item.cvrPercent} Clicks
                      </span>
                    </ProductContainer>
                  </ProductColumnContainer>
                </TopMainContainer>
              </>
            );
          })}
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }

  if (props.title === "Top posts" && isPostData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent>
          <HeadLinkContainer href={"/topposts"}>
            <TopContainer $bold={true}>{props.title}</TopContainer>
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
                      width={50}
                      height={50}
                    />

                    <div>
                      <ProductContainer>
                        <span className="product-text">{checkString}</span>
                      </ProductContainer>
                      <div></div>
                    </div>
                  </TopContainerChild>
                  <ProductColumnContainer>
                    <ProductContainer>
                      <span className="product-price">SEK {item.price}</span>
                    </ProductContainer>
                  </ProductColumnContainer>
                </TopMainContainer>
              </>
            );
          })}
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }

  if (props.title === "Top stores" && isStoresData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent>
          <HeadLinkContainer href={"/topstores"}>
            <TopContainer $bold={true}>{props.title}</TopContainer>

            <Image src={arrowSvg} alt="icons" />
          </HeadLinkContainer>
          {props.data.map((item: any) => {
            return (
              <>
                <TopMainContainer>
                  <TopContainerChild>
                    <div>
                      <ProductContainer>
                        <span className="product-text">{item.name}</span>
                      </ProductContainer>
                      <div>
                        <ProductContainer>
                          <span className="product-precent"> </span>
                        </ProductContainer>
                        <ProductContainer>
                          <span className="product-type"></span>
                        </ProductContainer>
                      </div>
                    </div>
                  </TopContainerChild>
                  <ProductColumnContainer>
                    <ProductContainer>
                      <span className="product-price">SEK {item.price}</span>
                    </ProductContainer>
                    <ProductContainer>
                      <span className="product-cv"></span>
                    </ProductContainer>
                  </ProductColumnContainer>
                </TopMainContainer>
              </>
            );
          })}
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
