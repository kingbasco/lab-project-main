import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// const StyledLabCard = styled(card)(({ theme }) => ({}));

const LabCard = ({ title, image, details }) => {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ mb: { xs: "40px" } }}>
          <Typography
            sx={{
              color: "#101828",
              fontSize: { xs: "24px", md: "28px" },
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#667085",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
              width: { xs: "100%", md: "70%" },
            }}
          >
            {details}
          </Typography>
        </Box>
        <Box>
          <img src={image} width="340px" height="auto"></img>
        </Box>
      </Box>
    </Box>
  );
};

export default LabCard;
