import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ variant }) => ({
  backgroundColor: variant === "contained" ? "#2F66FF" : "white",
  color: variant === "contained" ? "#fff" : "black",
  textTransform: "none",
  borderRadius: "4px",
  padding: "10px 20px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: variant === "contained" ? "#5B84FF" : "#f5f5f7ff",
  },
}));

type CustomButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  startIcon?: any;
};

const CustomButton = ({
  label,
  onClick,
  variant = "contained",
  startIcon,
}: CustomButtonProps) => {
  return (
    <StyledButton startIcon={startIcon} onClick={onClick} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default CustomButton;
