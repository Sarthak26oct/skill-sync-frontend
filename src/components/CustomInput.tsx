import { styled } from "@mui/material";
import type { ChangeEvent } from "react";

type CustomInputProps = {
  name: string;
  id: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const StyledInput = styled("input")(() => ({
  border: "1px solid #e1dedeff",
  borderRadius: "4px",
  padding: "0.8rem",
}));

const CustomInput = ({
  name,
  id,
  onChange,
  placeholder,
  type = "text",
}: CustomInputProps) => {
  return (
    <StyledInput
      name={name}
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
