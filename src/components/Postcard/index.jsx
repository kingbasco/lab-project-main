import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import MyButton from "../Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StyledPostCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  "& .CardDetails": {
    display: "none",
    width: "350px",
    padding: "30px",
    fontSize: "16px",
  },
  "&:hover": {
    "& .CardDetails": {
      display: "flex",
    },
  },
}));

const Postcard = ({ image, title, details, date }) => {
  return (
    <Box>
      <StyledPostCard>
        <CardActionArea sx={{ width: 385, minWidth: 385 }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green landscape"
          />
          <CardContent
            sx={{
              padding: "40px 20px",
            }}
          >
            <Typography
              sx={{
                color: "#07304A",
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 600,
                width: { xs: "60%", md: "100%" },
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ color: "#6D6D6D", marginTop: "40px" }}>
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box className="CardDetails">
          <Typography>{details}</Typography>
          <MyButton
            as={"a"}
            href="#"
            sx={{
              marginTop: "auto",
              // backgroundColor: "transparent",
              color: "#0BA8EC",
              textTransform: "uppercase",
            }}
            endIcon={<ChevronRightIcon sx={{ color: "#0BA8EC" }} />}
          >
            Expand
          </MyButton>
        </Box>
      </StyledPostCard>
    </Box>
  );
};

export default Postcard;
