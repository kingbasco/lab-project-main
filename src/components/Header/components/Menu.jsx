import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Collapse from "@mui/material/Collapse";

const CheckList = styled("li")(({ theme }) => ({
  "& a": {
    textDecoration: "none",
  },
  "& a:visited": {
    color: "#fff",
  },
  "& a:hover": {
    color: "#0BA8EC",
  },
}));
const MenuStyle = ({ checked }) => {
  return (
    <Collapse in={checked}>
      <Box
        sx={{
          backgroundColor: "#07304A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          listStyleType: "none",
          color: "#fff",
          fontSize: "32px",
          fontWeight: 500,
          height: "60vh",
          padding: "9rem 0",
          justifyContent: "space-between",
          textDecoration: "none",
        }}
      >
        <CheckList>
          <a href="/">Home</a>
        </CheckList>
        <CheckList>
          <a href="/lab-resources">Lab Resources</a>
        </CheckList>
        <CheckList>
          <a href="/blog">Blog</a>
        </CheckList>
        <CheckList>
          <a href="/research-publications">Research & Publications</a>
        </CheckList>
        <CheckList>
          <a href="/about">About</a>
        </CheckList>
      </Box>
    </Collapse>
  );
};

export default MenuStyle;
