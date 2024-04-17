import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const AboutCard = ({ title, image, header, details }) => {
  return (
    <Box>
      <Box>
        <Box sx={{}}>
          <img src={image} width="100%" height="auto" />
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#101828",
            fontWeight: 500,
            marginTop: "10px",
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            color: "#6941C6",
            fontWeight: 400,
            marginTop: "5px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            color: "#667085",
            fontWeight: 400,
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {details}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TwitterIcon
            sx={{
              color: "#98A2B3",
            }}
          />
          <LinkedInIcon
            sx={{
              color: "#98A2B3",
            }}
          />
          <InstagramIcon
            sx={{
              color: "#98A2B3",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
