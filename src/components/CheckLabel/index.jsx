import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";

const CheckLabel = styled(Checkbox)(({ theme }) => ({
  borderRadius: 5,
  width: 16,
  height: 16,
  marginRight: "10px",
  border: "1px #D0D5DD",
  ".Mui-focusVisible &": {
    // outline: "1px #D0D5DD",
    // outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
}));

export default CheckLabel;
