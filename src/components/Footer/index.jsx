import React from "react";
import Box from "@mui/material/Box";
import logox from "../../assets/images/logo.svg";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { styled } from "@mui/material";

const CheckList = styled("li")(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    color: "#E4E7EC",
  },
  "& a:visited": {
    color: "#fff",
  },
  "& a:hover": {
    color: "#fff",
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#07304A",
        padding: { xs: "50px 30px", md: "60px 100px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "80px",
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box sx={{}}>
              <img src={logox} alt="this is a logo" />
            </Box>
            <Typography
              sx={{
                fontFamily: "Space Grotesk",
                textTransform: "uppercase",
                lineHeight: "22px",
                color: "#fff",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Smart Systems
              <br /> Technologies
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: { xs: "none", md: "block" },
            }}
          >
            <TwitterIcon
              sx={{
                color: "#E0F2FE",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            <LinkedInIcon
              sx={{
                color: "#E0F2FE",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            <FacebookIcon
              sx={{
                color: "#E0F2FE",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "grid", md: "flex" },
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "40px",
            gridTemplateColumns: { xs: "repeat(2, 1fr)" },
            mt: { xs: "30px" },
          }}
        >
          <Box
            sx={{
              listStyleType: "none",
              color: "#E4E7EC",
            }}
          >
            <li style={{ marginBottom: "15px" }}>
              <span
                style={{
                  color: "#98A2B3",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Activity
              </span>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>Research and Development</a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>Products and Services</a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>Training and Internship</a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>STEM Education</a>
            </li>
          </Box>
          <Box
            sx={{
              listStyleType: "none",
              color: "#E4E7EC",
            }}
          >
            {" "}
            <li style={{ marginBottom: "15px" }}>
              <span
                style={{
                  color: "#98A2B3",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                The Lab
              </span>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <CheckList>
                <a href="/about">About Us</a>
              </CheckList>
            </li>
            {/* <li style={{ marginBottom: "15px" }}>
              <CheckList>
                <a href="/contact">Contact Us</a>
              </CheckList>
            </li> */}
            <li style={{ marginBottom: "15px" }}>
              <a>Our Equipment</a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>Software</a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <CheckList>
                <a href="/collaborate">Collaborate with us</a>
              </CheckList>
            </li>
          </Box>
          <Box
            sx={{
              listStyleType: "none",
              color: "#E4E7EC",
              fontWeight: 500,
            }}
          >
            {" "}
            <li style={{ marginBottom: "15px" }}>
              <span
                style={{
                  color: "#98A2B3",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Resources
              </span>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <CheckList>
                <a href="/blog">Blog</a>
              </CheckList>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>External resource link1</a>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <a>External resource link2</a>
            </li>
          </Box>
        </Box>
      </Box>
      <hr
        style={{ height: "1px", backgroundColor: "#475467", border: "none" }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          mt: "30px",
        }}
      >
        <CopyrightOutlinedIcon
          sx={{
            color: "#FFFFFF8F",
            fontSize: "20px",
            mb: { xs: "45px", md: "0px" },
          }}
        />
        <Typography
          sx={{
            color: "#FFFFFF8F",
            fontSize: "16px",
          }}
        >
          2024 SMART SYSTEMS TECHNOLOGIES | FUTA. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
