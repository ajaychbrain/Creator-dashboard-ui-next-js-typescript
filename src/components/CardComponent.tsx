import { OneCardComponent, TopContainer, TopContainerChild, TopContainertext, TopContainertextchild } from "@/styles/CardComponentStyles";
import { BoxShadowContainer } from "@/styles/indexStyle";
import React from "react";
import arrowSvg from "../../public/arrow.svg";
import productsvg from "../../public/product1.svg"
import Image from "next/image";

interface data {
  id: number,
  name: string,
  image: string,
  price: number,
  type: string,
  percent: number,
  cvrPercent: number
}
interface Postdata {
  id: number,
  name: string,
  image: string,
  price: number,
}

interface Storesdata {
  id: number,
  name: string,
  price: number,
}


interface ProductProps {
  data: data[],
  title: string,
}

interface StoresProps {
  data: Storesdata[],
  title: string,
}

type Props = ProductProps | PostProps | StoresProps

interface PostProps {
  data: Postdata[],
  title: string
}

const CardComponent = (props: Props ) => {
  console.log(props, "Hello Data");

  if( props.title==="Top products" ){
  
    return (
      <BoxShadowContainer>
      <OneCardComponent>
        <TopContainer>
        <span style={{color:'#3A3A3A', fontFamily: 'Strawford', fontSize: '22px', fontStyle: 'normal', fontWeight: '1000',lineHeight: 'normal'}}>{props.title}</span>
        <Image src={arrowSvg} style={{marginRight:'60px'}}  alt="icons" />
        </TopContainer>
          {
            props.data.map((item:any)=>{
              return (
                <>
                <TopContainerChild>
          <div>
        <Image src={item.image} alt="product" width={50} height={50} /> 
        </div>
      <div>
        <span>{item.name}</span>
        <TopContainertext>
          <TopContainertextchild>
          <span>{item.percent}</span>
          </TopContainertextchild>
          <TopContainertextchild>
          <span>{item.type}</span>
          </TopContainertextchild>
        </TopContainertext>
        </div>
        <div>
        <span>{item.price}</span>
        <TopContainertext>
        <span>{item.cvrPercent}</span>
        <TopContainertextchild>
          </TopContainertextchild>
        </TopContainertext>
        </div>
        </TopContainerChild>
                </>
              )
            })
          }
       
      </OneCardComponent>
    </BoxShadowContainer>
    ) 
  }

  if( props.title==="Top posts" ){
  
    return (
      <BoxShadowContainer>
      <OneCardComponent>
        <TopContainer>
        <span style={{color:'#3A3A3A', fontFamily: 'Strawford', fontSize: '22px', fontStyle: 'normal', fontWeight: '1000',lineHeight: 'normal'}}>{props.title}</span>
        <Image src={arrowSvg} style={{marginRight:'60px'}}  alt="icons" />
        </TopContainer>
          {
            props.data.map((item:any)=>{
              return (
                <>
                <TopContainerChild>
          <div>
        <Image src={item.image} alt="product" width={50} height={50} /> 
        </div>
      <div>
        <span>{item.name}</span>
        <TopContainertext>
          <TopContainertextchild>
          <span>{item.percent}</span>
          </TopContainertextchild>
          <TopContainertextchild>
          <span>{item.type}</span>
          </TopContainertextchild>
        </TopContainertext>
        </div>
        <div>
        <span>{item.price}</span>
        <TopContainertext>
        <span>{item.cvrPercent}</span>
        <TopContainertextchild>
          </TopContainertextchild>
        </TopContainertext>
        </div>
        </TopContainerChild>
                </>
              )
            })
          }
       
      </OneCardComponent>
    </BoxShadowContainer>
    ) 
  }

  
  if( props.title==="Top stores"){
  
    return (
      <BoxShadowContainer>
      <OneCardComponent>
        <TopContainer>
       <span style={{color:'#3A3A3A', fontFamily: 'Strawford', fontSize: '22px', fontStyle: 'normal', fontWeight: '1000',lineHeight: 'normal'}}>{props.title}</span>
        <Image src={arrowSvg} style={{marginRight:'60px'}}  alt="icons" />
        </TopContainer>
          {
            props.data.map((item:any)=>{
              return (
                <>
                <TopContainerChild>
         
      <div>
        <span>{item.name}</span>
        <TopContainertext>
        
          <TopContainertextchild>
          <span>{item.type}</span>
          </TopContainertextchild>
        </TopContainertext>
        </div>
        <div>
        <span>{item.price}</span>
        <TopContainertext>
        <span>{item.cvrPercent}</span>
        <TopContainertextchild>
          </TopContainertextchild>
        </TopContainertext>
        </div>
        </TopContainerChild>
                </>
              )
            })
          }
       
      </OneCardComponent>
    </BoxShadowContainer>
    ) 
  }
  
};

export default CardComponent;
