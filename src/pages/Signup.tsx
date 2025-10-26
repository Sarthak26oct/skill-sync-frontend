import { Grid, InputLabel, styled, Typography } from "@mui/material";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import logo from "../assets/SkillSyncLogo.png";
import { useState, type ChangeEvent } from "react";
import google from "../assets/google.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

const StyledMainGrid = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

const StyledCard = styled(Grid)(() => ({
  backgroundColor: "white",
  border: "1px solid #e1dedeff",
  borderRadius: "8px",
  padding: "2.5rem",
  minWidth: "25rem",
}));

const TitleMainContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const TitleContainer = styled(Grid)(() => ({
  display: "flex",
  alignItems: "end",
}));

const StyledTitle = styled(Typography)(() => ({
  color: "black",
  fontWeight: "500",
  fontSize: "2rem",
  marginBottom: "1rem",
}));

const StyledLogo = styled("img")(() => ({
  width: "4.5rem",
}));

const StyledImg = styled("img")(() => ({
  width: "1.5rem",
}));

const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

const StyledGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "#2F66FF",
}));

const StyledStrokeContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  margin: "1rem 0",
}));

const StyledStroke = styled(Grid)(() => ({
  width: "100%",
  height: "1px",
  backgroundColor: "#e1dedeff",
}));

const ButtonGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const AccountContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "1rem",
}));

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log(formData);
  };

  return (
    <StyledMainGrid>
      <StyledCard>
        <TitleMainContainer>
          <TitleContainer>
            <StyledLogo src={logo} alt="Skill Sync Logo" />
            <StyledTitle>SkillSync</StyledTitle>
          </TitleContainer>
        </TitleMainContainer>

        <StyledTitle>Sign Up</StyledTitle>

        <StyledForm>
          <StyledGrid>
            <InputLabel>Username</InputLabel>
            <CustomInput
              name="name"
              id="name"
              type="text"
              placeholder="Enter Username"
              onChange={handleInput}
            />
          </StyledGrid>
          <StyledGrid>
            <InputLabel>Email Address</InputLabel>
            <CustomInput
              name="email"
              id="email"
              type="email"
              placeholder="Enter Email Address"
              onChange={handleInput}
            />
          </StyledGrid>
          <StyledGrid>
            <InputLabel>Password</InputLabel>
            <CustomInput
              name="password"
              id="password"
              placeholder="Enter Password"
              type="password"
              onChange={handleInput}
            />
          </StyledGrid>
          <CustomButton label="Sign Up" onClick={handleLogin} />
        </StyledForm>

        <StyledStrokeContainer>
          <StyledStroke></StyledStroke>
          Or
          <StyledStroke></StyledStroke>
        </StyledStrokeContainer>

        <ButtonGrid>
          <CustomButton
            label="Continue with Google"
            variant="outlined"
            startIcon={<StyledImg src={google} />}
          />
          <CustomButton
            label="Continue with Github"
            variant="outlined"
            startIcon={<StyledImg src={github} />}
          />
        </ButtonGrid>

        <AccountContainer>
          <Grid>Already have an account? </Grid>
          <StyledLink to="/">Log in</StyledLink>
        </AccountContainer>
      </StyledCard>
    </StyledMainGrid>
  );
};

export default SignUp;
