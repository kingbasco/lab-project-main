import React from "react";
import { Outlet } from "react-router";
import Box from "@mui/material/Box";

const Container = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Container;
