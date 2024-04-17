import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const LabTabs = styled(Tabs)({
  borderBottom: "none",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});

const LabTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  borderTopRightRadius: "8px",
  borderTopLeftRadius: "8px",
  padding: "10px 15px",
  marginRight: theme.spacing(2),
  backgroundColor: "#F5F5F5",
  color: "#07304A",
  "&.Mui-selected": {
    backgroundColor: "#07304A",
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));

export { LabTabs, LabTab };
