import React from "react";
import Box from "@mui/material/Box";
import logo from "../../assets/images/logo.svg";
import Typography from "@mui/material/Typography";
import MyButton from "../Button";
import Menu from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import MenuStyle from "./components/Menu";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        backgroundColor: "#fff",
        zIndex: 99,
        borderBottom: "1px solid #07304A",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // gap: "10px",
            width: "100%",
            margin: { xs: "0 20px 0 25px", md: "0 40px 0 50px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "5px", md: "10px" },
            }}
          >
            <Box sx={{}}>
              <img src={logo} alt="this is a logo" />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Space Grotesk",
                textTransform: "uppercase",
                lineHeight: "22px",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Smart Systems
              <br /> Technologies
            </Typography>
          </Box>
          <MyButton
            as={"a"}
            href="/collaborate"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Contact us
          </MyButton>
        </Box>

        <Box
          sx={{
            backgroundColor: "#07304A",
            padding: { xs: "25px 20px", md: "20px 50px" },
          }}
        >
          <IconButton disableRipple disableFocusRipple onClick={handleMenu}>
            {open ? (
              <CloseIcon
                sx={{
                  color: "#fff",
                  fontSize: "40px",
                }}
              />
            ) : (
              <Menu
                sx={{
                  color: "#fff",
                  fontSize: "40px",
                }}
              />
            )}
          </IconButton>
        </Box>
      </Box>
      <MenuStyle checked={open} />
    </Box>
  );
};

export default Header;
