import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import card from "../../../assets/images/card-image.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const TabOne = () => {
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
          04
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
          Training girls in stem
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
          We inspire the next generation of tech leaders with our STEM education
          initiatives. Fostering creativity and critical thinking, and equipping
          students with the skills to thrive.
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
          src={card}
          alt="school girls"
          width="100%"
          // height="auto"
        ></img>
      </Box>
    </Box>
  );
};

export default TabOne;
