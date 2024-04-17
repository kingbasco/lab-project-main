import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import bridge from "../../../assets/images/studygroup.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TabTwo = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{}}>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#0BA8EC",
            fontSize: { xs: "48px", md: "64px" },
            mb: "15px",
          }}
        >
          03
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "20px", md: "24px" },
            color: "#fff",
            mb: { xs: "15px", md: "12px" },
            textTransform: "uppercase",
          }}
        >
          Training and Internship
        </Typography>
        <Typography
          sx={{
            color: "#E4E7EC",
            width: { xs: "100%", md: "70%" },
            fontWeight: 400,
            fontsize: { xs: "16px", md: "20px" },
            mb: "12px",
          }}
        >
          Fuel your passion for innovation through our immersive training and
          internship programs. Join us on a journey of skill enhancement and
          hands-on experience.
        </Typography>
        <Typography
          as={"a"}
          href="#"
          sx={{
            textDecoration: "none",
            color: "#0BA8EC",
            textTransform: "uppercase",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            mb: { xs: "2rem" },
          }}
        >
          Read more{" "}
          <ArrowRightAltIcon
            sx={{
              fontSize: "medium",
              color: "#0BA8EC",
            }}
          />
        </Typography>
        <Typography
          sx={{
            mt: "40px",
            mb: "5px",
            color: "#E4E7EC",
            width: "70%",
            fontSize: "14px",
            display: { xs: "none", md: "none" },
          }}
        >
          Find out how TraceSafe worker safety solution transformed safety and
          efficiency at leading oil and gas company
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={bridge}
          alt="a bridge construction"
          width="100%"
          //   height="auto"
        ></img>
      </Box>
    </Box>
  );
};

export default TabTwo;
