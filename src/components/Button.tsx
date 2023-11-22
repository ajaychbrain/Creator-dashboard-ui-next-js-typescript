import { ButtonStyled } from "@/styles/indexStyle";
import React from "react";

type Props = {
  name: string;
  id: string;

  onChangeHandler: (data: string) => void;
  currentSelectedValue: string;
};

const Button = ({ name, id, onChangeHandler, currentSelectedValue }: Props) => {
  return (
    <ButtonStyled
      name={name}
      id={id}
      $isSelected={currentSelectedValue == name}
      onClick={() => onChangeHandler(name)}
    >
      {name}
    </ButtonStyled>
  );
};

export default Button;
