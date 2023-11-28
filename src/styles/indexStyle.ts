import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export const ButtonStyled = styled.button<{
  $isSelected?: boolean;
  $width?: boolean;
  $height?: boolean;
  $gap?: boolean;
  $padding?: boolean;
}>`
  cursor: pointer;
  padding: ${(props) => (props.$padding ? "12px" : "")};
  background-color: white;
  border: ${(props) =>
    props.$isSelected ? "1px solid black" : "1px solid #9D9D9D"};
  color: ${(props) => (props.$isSelected ? "black" : "#9D9D9D")};
  border-radius: 20px;
  white-space: nowrap;

  & > a {
    color: ${(props) => (props.$isSelected ? "black" : "#9D9D9D")};
  }

  gap: ${(props) => (props.$gap ? "5px" : "0")};

  @media only screen and (max-width: 655px) {
    display: inline-block;
    padding: 8px;
  }
`;
export const HeadingContainerMain = styled.div<{
  $applyStyle?: boolean;
  $applyPadding?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-bottom: ${(props) => (props.$applyStyle ? "31px" : "0")};
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media only screen and (max-width: 655px) {
    justify-content: normal;
    ${(props) =>
      props.$applyStyle &&
      `display: flex;
       flex-direction: row-reverse;
    justify-content: normal;
    overflow-x: auto;
    white-space: nowrap;
    /////////////HIDE SCROLLBAR/////////////////////////
    &::-webkit-scrollbar {
      display: none;
    }
      `}
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 2.3rem;
  }
  @media only screen and (max-width: 920px) {
    margin-top: ${(props) => (props.$applyPadding ? "2.5rem" : "1.5rem")};
  }
`;

export const CaretLeftandLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 37%;
`;

export const DatePickerContainer = styled(DatePicker)`
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0px, 14px, 0px, 14px;
  background-color: white;
  border-radius: 20px;
  width: 146px;
  height: 39px;
  gap: 5px;
  border: 1px solid black;

  @media only screen and (max-width: 655px) {
    padding: 8px;
  }
`;

export const BoxShadowContainer = styled.div<{ $applyHeight?: string }>`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.125rem 9.375rem;

  @media only screen and (max-width: 1100px) {
    margin: 2.125rem 5.375rem;
  }

  @media only screen and (max-width: 920px) {
    margin: 1.125rem 3.375rem;
  }

  @media only screen and (max-width: 500px) {
    margin: 2.25rem 1rem;
  }
`;

export const SearchMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
`;

export const HeadingContainer = styled.div<{
  $applyStyle?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-bottom: ${(props) => (props.$applyStyle ? "31px" : "0")};
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const ScrollContainer = styled.div`
  display: flex;
  justify-content: normal;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  @media only screen and (max-width: 1060px) {
    display: flex;
    justify-content: normal;
    overflow: auto;
    white-space: nowrap;
    /////////////HIDE SCROLLBAR/////////////////////////
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const LinkStyle = styled(Link)<{ $isSelected?: boolean }>`
  text-decoration: none;
  color: #9d9d9d;
  cursor: pointer;

  &:active {
    color: #9d9d9d;
  }

  &:focus {
    color: black;
  }
`;

export const LeftImageTest = styled(Image)`
  transform: rotate(180deg);
`;

export const SearchLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
`;
