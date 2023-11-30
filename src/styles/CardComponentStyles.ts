import Link from "next/link";
import styled from "styled-components";

export const OneCardComponent = styled.div<{
  $height?: boolean;
  $overflowY?: boolean;
  $isheightChange?: boolean;
}>`
  min-width: 390px;
  height: ${(props) => (props.$height ? "430px" : "0px")};

  border-radius: 10px;
  gap: 16px;
  overflow-y: ${(props) => (props.$height ? "scroll" : "")};
  background-color: rgba(255, 255, 255, 0.4);

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 972px) {
    min-width: 0;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 655px) {
    height: ${(props) => (props.$isheightChange ? "300px" : "auto")};
  }
`;

export const TopAllTitleContainer = styled.div<{ $marginBottom?: boolean }>`
  position: sticky;
  position: -webkit-sticky;
  background-color: rgba(255, 255, 255, 1);
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  align-items: center;

  & > span {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
  }
  @media only screen and (max-width: 1024px) {
    /* position: fixed; */
    top: 0;
    left: 0;
    padding: 12px 15px;
    z-index: 1000;
  }
  @media only screen and (max-width: 600px) {
    & > span {
      font-size: 1.2rem;
    }
  }
`;

export const FlexContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;

  #percent {
    background-color: #f4f0ec;
    color: #3a3a3a;

    font-size: 0.60869rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02738rem;
  }
`;

export const TopContainer = styled.span<{
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
  font-weight: ${(props) => (props.$bold ? "400" : "600")};
  line-height: normal;
  color: #3a3a3a;
  background-color: ${(props) => (props.$background ? props.$background : "")};
  /* margin: 0.3rem 0; */
  padding: ${(props) => (props.$padding ? "0.3rem 0.2rem" : "0.3rem 0")};

  white-space: ${(props) => (props.$wrap ? "nowrap" : "")};
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
  font-weight: ${(props) => (props.$bold ? "600" : "600")};
  line-height: normal;
  color: #3a3a3a;
  background-color: ${(props) => (props.$background ? props.$background : "")};
  /* margin: 0.3rem 0; */
  padding: ${(props) => (props.$padding ? "0.3rem 0.2rem" : "0.3rem 0")};

  white-space: ${(props) => (props.$wrap ? "nowrap" : "")};
  margin-left: 5.06px;
`;

export const TopContainerChild = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const HeadLinkContainer = styled(Link)`
  position: sticky;
  position: -webkit-sticky;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  text-decoration: none;

  & > span {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
  }
`;

export const TopMainContainer = styled.div<{ $padding?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  padding: ${(props) => (props.$padding ? props.$padding : "0.568rem 2rem")};
  border-bottom: 1px solid #dddddd;
`;
export const ProductColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;

  #percent {
    background-color: #f4f0ec;
    color: #3a3a3a;

    font-size: 0.60869rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02738rem;
  }
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
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;

  @media only screen and (max-width: 972px) {
    display: block;
  }
`;
