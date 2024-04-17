import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import hexagon from "../../../assets/images/hexagon.svg";
import matrix from "../../../assets/images/matrix.svg";
import compass from "../../../assets/images/compass.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const CardInfo = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "grid" },
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px",
      }}
    >
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#F5F5F5",
          padding: "15px 20px",
          mb: { xs: "20px" },
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: "54px",
              height: "48px",
              mb: "15px",
            }}
          >
            <img
              src={hexagon}
              width="100%"
              alt="this is an hexagon with a blue circle"
            ></img>
          </Box>
          <Typography
            sx={{
              fontSize: 18,
              color: "#1D2939",
              fontWeight: 600,
              mb: "15px",
            }}
          >
            Equipments
          </Typography>
          <Typography
            sx={{
              color: "#042326",
              fontSize: 15,
              mb: "10px",
            }}
          >
            Our solutions, created with deep client collaboration, respond
            uniquely to every customer’s needs. By bringing together our
            hardware expertise with a user friendly analytics platform, we can
            solve most operational problems in enterprise.
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
            }}
          >
            Our Equipments{" "}
            <ArrowRightAltIcon
              sx={{
                fontSize: "medium",
                color: "#0BA8EC",
              }}
            />
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#F5F5F5",
          padding: "15px 20px",
          mb: { xs: "20px" },
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: "54px",
              height: "48px",
              mb: "15px",
            }}
          >
            <img
              src={compass}
              width="100%"
              alt="this is an hexagon with a blue circle"
            ></img>
          </Box>
          <Typography
            sx={{
              fontSize: 18,
              color: "#1D2939",
              fontWeight: 600,
              mb: "15px",
            }}
          >
            Software
          </Typography>
          <Typography
            sx={{
              color: "#042326",
              fontSize: 15,
              mb: "25px",
            }}
          >
            Our success in executing large scale projects at record time is
            unmatched. We provide best-in-class solutions for each customer’s
            operational challenges, no matter the scale and size.
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
            }}
          >
            Our Software{" "}
            <ArrowRightAltIcon
              sx={{
                fontSize: "medium",
                color: "#0BA8EC",
              }}
            />
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#F5F5F5",
          padding: "15px 20px",
          mb: { xs: "20px" },
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: "54px",
              height: "48px",
              mb: "15px",
            }}
          >
            <img
              src={matrix}
              width="100%"
              alt="this is an hexagon with a blue circle"
            ></img>
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#1D2939",
              fontWeight: 600,
              mb: "15px",
            }}
          >
            External Resources
          </Typography>
          <Typography
            sx={{
              color: "#042326",
              fontSize: 15,
              mb: "70px",
            }}
          >
            Our success in executing large scale projects at record time is
            unmatched. We provide best-in-class solutions for each
          </Typography>
          <Typography
            as={"a"}
            href="#"
            sx={{
              textDecoration: "none",
              color: "#0BA8EC",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            External Resources Link 1{" "}
            <ArrowRightAltIcon
              sx={{
                fontSize: "medium",
                color: "#0BA8EC",
              }}
            />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardInfo;
