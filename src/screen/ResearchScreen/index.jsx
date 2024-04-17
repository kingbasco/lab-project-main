import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ResearchCard from "./component/researchcard";
import drive from "../../assets/images/drive.png";
import mashup from "../../assets/images/mashupart.png";
import panel from "../../assets/images/panel.png";
import virtual from "../../assets/images/virtualreality.png";
import Pagination from "@mui/material/Pagination";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const pubs = [
  {
    id: 0,
    title: "How to promote inclusion and belonging from the start",
    details:
      "Greenhouse Head of Inclusion, Diversity, Equity and Allyship (IDEA) Jamie Adasi reveals how to promote inclusion in the workplace from the start, at From Day One Boston.",
    image: drive,
  },
  {
    id: 1,
    title: "How to promote inclusion and belonging from the start",
    details:
      "Greenhouse Head of Inclusion, Diversity, Equity and Allyship (IDEA) Jamie Adasi reveals how to promote inclusion in the workplace from the start, at From Day One Boston.",
    image: mashup,
  },
  {
    id: 2,
    title: "How to promote inclusion and belonging from the start",
    details:
      "Greenhouse Head of Inclusion, Diversity, Equity and Allyship (IDEA) Jamie Adasi reveals how to promote inclusion in the workplace from the start, at From Day One Boston.",
    image: virtual,
  },
  {
    id: 3,
    title: "How to promote inclusion and belonging from the start",
    details:
      "Greenhouse Head of Inclusion, Diversity, Equity and Allyship (IDEA) Jamie Adasi reveals how to promote inclusion in the workplace from the start, at From Day One Boston.",
    image: drive,
  },
  {
    id: 4,
    title: "How to promote inclusion and belonging from the start",
    details:
      "Greenhouse Head of Inclusion, Diversity, Equity and Allyship (IDEA) Jamie Adasi reveals how to promote inclusion in the workplace from the start, at From Day One Boston.",
    image: panel,
  },
];

const ResearchScreen = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
        padding: { xs: "60px 20px", md: "100px" },
      }}
    >
      <Typography
        sx={{ color: "#0087CA", fontWeight: 600, mb: { xs: "20px" } }}
      >
        Research and publications
      </Typography>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: { xs: "50px", md: "100px" },
        }}
      >
        <Typography
          sx={{
            color: "#101828",
            fontSize: { xs: "32px", md: "50px" },
            fontWeight: 600,
          }}
        >
          Cutting edge research...
        </Typography>
        <Typography
          sx={{
            color: "#667085",
            fontSize: "18px",
            width: { xs: "100%", md: "60%" },
          }}
        >
          We focus on the details of everything we do. All to help businesses
          around the world focus on what’s most important to them. We take pride
          in this.
        </Typography>
      </Box>
      <Box>
        {pubs.map((pub) => (
          <ResearchCard
            id={pub.id}
            title={pub.title}
            details={pub.details}
            image={pub.image}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <ArrowBackOutlinedIcon
            sx={{
              fontSize: "large",
              color: " #667085",
            }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              color: "#667085",
              display: { xs: "none", md: "block" },
            }}
          >
            Previous
          </Typography>
        </Box>
        <Pagination count={10} hidePrevButton hideNextButton />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "#667085",
              display: { xs: "none", md: "block" },
            }}
          >
            Next
          </Typography>
          <ArrowForwardOutlinedIcon
            sx={{
              fontSize: "large",
              color: " #667085",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ResearchScreen;
