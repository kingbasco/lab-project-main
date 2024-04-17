import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const StyledPostCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
}));

const Blogcard = ({ image, title, date }) => {
  return (
    <Box>
      <StyledPostCard>
        <CardActionArea
          sx={{ width: 360, minWidth: 360, mb: { xs: "20px", md: "0px" } }}
        >
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green landscape"
          />
          <CardContent
            sx={{
              padding: "30px 15px",
            }}
          >
            <Typography
              sx={{ color: "#07304A", fontSize: "20px", fontWeight: 500 }}
            >
              {title}
            </Typography>
            <Typography sx={{ color: "#6D6D6D", marginTop: "40px" }}>
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledPostCard>
    </Box>
  );
};

export default Blogcard;
