import React, { useState } from "react";
import Button from "./Button";
import { buttons } from "../constants/index";
import { HeadingContainer } from "@/styles/indexStyle";
import DatePickerComponent from "./DatePickerComponent";
import useWindowSize from "@/ReactHooks/useWindowSize";

type Props = {
  isApplyStyle: boolean;
  getSelectedValue: (value: string) => void;
  getSelectedDateValue: (value: any) => void;
};

const MainHeader = (props: Props) => {
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);
  const { data } = useWindowSize();

  const onChangeHandler = (value: string) => {
    if (value == "") console.log(value);
    setSelected(value);
  };

  props.getSelectedValue(selected);

  const getSelectedDate = (dateSelected: any) => {
    console.log(dateSelected);
    props.getSelectedDateValue(dateSelected);
  };

  const doesDateChange = () => {
    setSelected("");
  };

  return (
    <HeadingContainer
      $applyStyle={props.isApplyStyle}
      $applyPadding={data < 425 ? true : false}
    >
      {buttons.map((buttonDetails: any, index: number) => {
        return (
          <Button
            key={index}
            name={buttonDetails.name}
            id={buttonDetails.id}
            onChangeHandler={onChangeHandler}
            currentSelectedValue={selected}
          />
        );
      })}
      <DatePickerComponent
        selectValueFromtoTo={selected}
        getSelectedDate={getSelectedDate}
        doesDateChange={doesDateChange}
      />
    </HeadingContainer>
  );
};

export default MainHeader;
