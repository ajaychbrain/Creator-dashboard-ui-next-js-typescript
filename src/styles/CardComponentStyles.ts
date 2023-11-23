import styled from "styled-components";

export const OneCardComponent = styled.div`
  width: 390px;
  height: 440px;
  border-radius: 10px;
  gap: 16px;
`;

export const TopContainer = styled.div`
display: flex;
/* width: 100%; */
justify-content: space-between;
color: #3A3A3A;
font-family: Strawford;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 15px;
/* margin: 16px 0px 20px 7px; */
border-bottom: 1px solid #dddddd;
`;



export const TopContainerChild = styled.div`
margin-top: 12px;
display: flex;
justify-content: space-around;
margin-top: 40px;
border-bottom: 1px solid #dddddd;
`;



export const TopContainertext = styled.div`
display: flex;
gap: 1rem;


`;
export const TopContainertextchild = styled.div`
border-radius: 2.783px;
background: var(--Light-Beige, #F4F0EC);

`;









export const AllProductContainer = styled.div`
margin-top: 12px;
border: 1px solid grey;
display: flex;
justify-content: space-evenly;
`;




export const CardsComponentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
