import styled from "styled-components";

export const OneCardComponent = styled.div`
  width: 390px;
  height: 440px;

  border-radius: 10px;
  gap: 16px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.4);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  color: #3a3a3a;
  font-family: Strawford;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 35px;
  /* margin: 16px 0px 20px 7px; */
  border-bottom: 1px solid #dddddd;
`;

export const ProductContainer = styled.span<{
  $wrap?: boolean;
  $bold?: boolean;
  $background?: string;
  $padding?: boolean;
}>`
  /* min-width: 0;
  white-space: nowrap;
  text-overflow: ellipsis; */

  font-size: ${(props) => (props.$bold ? "0.875rem" : "0.75rem")};
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? "600" : "400")};
  line-height: normal;
  color: #3a3a3a;
  background-color: ${(props) => (props.$background ? props.$background : "")};
  /* margin: 0.3rem 0; */
  padding: ${(props) => (props.$padding ? "0.3rem 0.2rem" : "0.3rem 0")};

  white-space: ${(props) => (props.$wrap ? "nowrap" : "")};
`;

export const TopContainerChild = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const TopMainContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: flex-start; */
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0.625rem 2rem;
  border-bottom: 1px solid #dddddd;
`;

export const ProductColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #3a3a3a;
`;
export const TopContainertextchild = styled.div`
  border-radius: 2.783px;
  background: var(--Light-Beige, #f4f0ec);
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
