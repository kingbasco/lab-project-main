import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Blogcard from "./component/blogcard";
import landscape from "../../assets/images/landscape.png";
import Pagination from "@mui/material/Pagination";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const posts = [
  {
    id: 0,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 1,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 2,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 3,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 4,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 5,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 6,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 7,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
  {
    id: 8,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
  },
];

const BlogScreen = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
        padding: { xs: "60px 25px", md: "100px" },
      }}
    >
      <Typography sx={{ color: "#0087CA", fontWeight: 600 }}>Blog</Typography>
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
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 600,
            mt: { xs: "10px" },
          }}
        >
          Our latest resources and activities
        </Typography>
        <Typography
          sx={{
            color: "#667085",
            fontSize: "18px",
            width: { xs: "100%", md: "60%" },
          }}
        >
          The latest industry news, technologies and resources.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          mb: "40px",
        }}
      >
        {posts.map((post) => (
          <Blogcard
            id={post.id}
            image={post.image}
            title={post.title}
            date={post.date}
          />
        ))}
      </Box>
      <hr
        style={{ height: "1px", backgroundColor: "#E4E7EC", border: "none" }}
      />
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

export default BlogScreen;
