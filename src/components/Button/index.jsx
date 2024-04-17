import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0087CA",
  borderRadius: "4px",
  color: "#fff",
  padding: "12px 20px",
  textDecoration: "none",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#0087CA",
  },
}));

export default MyButton;
