import React, { useState } from "react";
import Button from "./Button";
import { buttons } from "../constants/index";
import { HeadingContainer } from "@/styles/indexStyle";
import DatePickerComponent from "./DatePickerComponent";
type Props = {
  isApplyStyle: boolean;
};

const MainHeader = (props: Props) => {
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (value: string) => {
    if (value == "") console.log(value);
    setSelected(value);
  };

  return (
    <HeadingContainer $applyStyle={props.isApplyStyle}>
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
      <DatePickerComponent selectValueFromtoTo={selected} />
    </HeadingContainer>
  );
};

export default MainHeader;
