import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const MyTextField = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "20px",
    marginBottom: "20px",
    "& .Mui-focused": {
      color: "#344054",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: 6,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "#D0D5DD",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

export default MyTextField;
