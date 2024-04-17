import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ResearchCard = ({ title, image, details }) => {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#0087CA",
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: 600,
            }}
          >
            Arinola Addo Daniel . 20 Jan 2023
          </Typography>
          <Typography
            sx={{
              color: "#07304A",
              fontSize: { xs: "20px", md: "34px" },
              fontWeight: 400,
              mt: { xs: "10px" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#667085",
              fontSize: { xs: "14px", md: "15px" },
              fontWeight: 400,
              mt: { xs: "10px" },
              mb: { xs: "30px" },
            }}
          >
            {details}
          </Typography>
        </Box>
        <Box>
          <img src={image}></img>
        </Box>
      </Box>
      <hr
        style={{ height: "1px", backgroundColor: "#0173AF", border: "none" }}
      />
    </Box>
  );
};

export default ResearchCard;
