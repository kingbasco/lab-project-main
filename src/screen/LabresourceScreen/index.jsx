import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LabCard from "./component/labcard";
import woman from "../../assets/images/teammeetW.png";
import man from "../../assets/images/teammeetM.png";
import whiteboard from "../../assets/images/whiteboard.png";
import computer from "../../assets/images/computer.png";

const labs = [
  {
    id: 0,
    title: "Collaborative Software and Tools",
    details:
      "Collaboration platforms, version control systems, and project management tools are available to facilitate efficient teamwork and project coordination.",
    image: woman,
  },
  {
    id: 1,
    title: "Library and Knowledge Resources",
    details:
      "Access a rich collection of technical journals, books, and online databases to support research and learning in various domains of computer engineering.",
    image: man,
  },
  {
    id: 2,
    title: "Comfortable Workstations",
    details:
      "Ergonomically designed workstations with adjustable desks and ergonomic seating ensure a comfortable and productive work environment for researchers and collaborators.",
    image: whiteboard,
  },
  {
    id: 3,
    title: "And many more...",
    details:
      "Our lab is equipped with cutting-edge facilities designed to facilitate groundbreaking research and innovation. From high-performance computing clusters to specialized prototyping labs, we provide the resources needed to push the boundaries of computer engineering.",
    image: computer,
  },
];

const LabresourceScreen = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
        padding: { xs: "60px 25px", md: "100px" },
      }}
    >
      <Typography
        sx={{ color: "#0087CA", fontWeight: 600, mb: { xs: "20px" } }}
      >
        Lab resources
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
            mb: { xs: "10px" },
          }}
        >
          State-of-the-Art-Facilities
        </Typography>
        <Typography
          sx={{
            color: "#667085",
            fontSize: "18px",
            width: { xs: "100%", md: "60%" },
          }}
        >
          Our lab is equipped with cutting-edge facilities designed to
          facilitate groundbreaking research and innovation. From
          high-performance computing clusters to specialized prototyping labs,
          we provide the resources needed to push the boundaries of computer
          engineering.
        </Typography>
      </Box>
      <Box
        sx={
          {
            //   width: "100%",
          }
        }
      >
        {labs.map((lab) => (
          <LabCard
            id={lab.id}
            title={lab.title}
            details={lab.details}
            image={lab.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LabresourceScreen;
