import React from "react";
import Box from "@mui/material/Box";
import hero from "../../assets/images/heroimage.png";
import Typography from "@mui/material/Typography";
import MyButton from "../../components/Button";
import PropTypes from "prop-types";
import { LabTab, LabTabs } from "./components/Tabs";
import Divider from "@mui/material/Divider";
import TabOne from "./components/TabOne";
import TabTwo from "./components/TabTwo";
import TabThree from "./components/TabThree";
import TabFour from "./components/TabFour";
import CardInfo from "./components/card";
import babe from "../../assets/images/BabeImage.png";
import quote from "../../assets/images/quote.svg";
import { ArrowCircleRightRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import landscape from "../../assets/images/landscape.png";
import Postcard from "../../components/Postcard";
import techie from "../../assets/images/techie.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const posts = [
  {
    id: 0,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
    details:
      "Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century revolutionizing various industries and reshaping the way we live and work.",
  },
  {
    id: 1,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
    details:
      "Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century, revolutionizing various industries and reshaping the way we live and work.",
  },
  {
    id: 2,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
    details:
      "Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century, revolutionizing various industries and reshaping the way we live and work.",
  },
  {
    id: 3,
    title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
    date: "Nov 28, 2022",
    image: landscape,
    details:
      "Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century, revolutionizing various industries and reshaping the way we live and work.",
  },
  // {
  //   id: 4,
  //   title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
  //   date: "Nov 28, 2022",
  //   image: landscape,
  //   details:
  //     "Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century, revolutionizing various industries and reshaping the way we live and work.",
  // },
  // {
  //   id: 5,
  //   title: "The Rise of AI: Recent Discoveries in Artificial Intelligence",
  //   date: "Nov 28, 2022",
  //   image: landscape,
  //   details:
  //     "Artificial Intelligence (AI) has emerged as one of the most transformative technologies of the 21st century, revolutionizing various industries and reshaping the way we live and work.",
  // },
];

const WelcomeScreen = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: "6rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: { xs: "80vh", md: "100vh" },
          background: `linear-gradient(270deg, rgba(29, 41, 57, 0.50) -7.38%, rgba(29, 41, 57, 0.85) 48.99%, #1D2939 99.77%), url(${hero}), no-repeat center`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            padding: { xs: "60px 30px", md: "120px 100px" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "700",
              fontSize: { xs: "48px", md: "72px" },
              width: "80%",
              mb: "20px",
            }}
          >
            Unlocking Tomorrow's Technology, Today
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "18px",
              color: "#fff",
              display: "block",
              width: { xs: "98%", md: "57%" },
              fontWeight: "400",
              mb: "45px",
              lineHeight: "1.5",
            }}
          >
            Through cutting-edge 3D fabrications, innovative prototypes, and
            advanced solutions, we pave the way for a future where possibilities
            are limitless. Join us on the forefront of progress and shape the
            world of technology with unparalleled expertise.
          </Typography>
          <MyButton
            sx={{
              width: { xs: "100%", md: "15%" },
            }}
          >
            What we do
          </MyButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "60px 20px", md: "100px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "32px",
            fontWeight: "bolder",
            width: { xs: "100%", md: "40%" },
            color: "#1D2939",
          }}
        >
          We are on a relentless quest to shape the future of technology
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            width: { xs: "100%", md: "50%" },
            color: "#667085",
            mt: { xs: "2rem" },
          }}
        >
          Shaping the future of technology through STEM Education, Nurturing
          Innovation via Technology Incubation, and Pioneering Breakthroughs in
          Research and Development
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { xs: "0 20px 0", md: "0 100px 0" },
        }}
      >
        <LabTabs onChange={handleChange} value={value}>
          <LabTab
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#0BA8EC",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  01
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    mx: "10px",
                    borderColor: value === 0 ? "#ffffff4D" : "#07304A",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Research and Development
                </Typography>
              </Box>
            }
          />
          <LabTab
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#0BA8EC",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  02
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    mx: "10px",
                    borderColor: value === 1 ? "#ffffff4D" : "#07304A",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Products and Services
                </Typography>
              </Box>
            }
          />
          <LabTab
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#0BA8EC",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  03
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    mx: "10px",
                    borderColor: value === 2 ? "#ffffff4D" : "#07304A",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Training and Internships
                </Typography>
              </Box>
            }
          />
          <LabTab
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#0BA8EC",
                    fontSize: "28px",
                    fontWeight: 700,
                  }}
                >
                  04
                </Typography>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    mx: "10px",
                    borderColor: value === 2 ? "#ffffff4D" : "#07304A",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  STEM Education
                </Typography>
              </Box>
            }
          />
        </LabTabs>
        <Box
          sx={{
            backgroundColor: "#07304A",
            borderRadius: "0 8px 8px",
            // height: "400px",
            padding: { xs: "0px", md: "3px 3px 3px 60px" },
          }}
        >
          <CustomTabPanel value={value} index={3}>
            <TabOne />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TabTwo />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={0}>
            <TabThree />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TabFour />
          </CustomTabPanel>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "50px 10px", md: "100px 200px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "24px", md: "32px" },
            width: { xs: "85%", md: "80%" },
            color: "#1D2939",
          }}
        >
          A dynamic hub of{" "}
          <span style={{ color: "#0173AF" }}>
            innovation, research and collaboration,
          </span>{" "}
          dedicated to shaping a future where technology knows{" "}
          <span style={{ color: "#0173AF" }}>no bounds</span>.
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { xs: "0 40px 40px", md: "0 100px 100px" },
        }}
      >
        <CardInfo />
      </Box>
      <Box
        sx={{
          backgroundColor: "#07304A",
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: { xs: "25px", md: "50px 100px" },
        }}
      >
        <Box sx={{}}>
          <img src={babe} alt="a beautiful fair woman" />
        </Box>
        <Box
          sx={{
            mt: " 40px",
          }}
        >
          <Box
            sx={{
              mb: "20px",
            }}
          >
            <img src={quote} alt="a quotation mark" />
          </Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              mb: "25px",
            }}
          >
            I've had the privilege of collaborating with the lab on a research
            project, and it's been an incredibly enriching experience. The level
            of expertise, dedication, and innovation that permeates every aspect
            of their work is truly remarkable.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            {" "}
            — Olivia Rhye <br />
            Head of Design, Layers
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: { xs: "60px 25px 30px", md: "100px 80px 60px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "32px",
            }}
          >
            Blog
          </Typography>
          <IconButton>
            <ArrowCircleRightRounded
              sx={{ color: "#0BA8EC", fontSize: "2rem" }}
            />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
              gap: "30px",
              marginLeft: { xs: "20px", md: "40px" },
              marginRight: { xs: "20px", md: "0px" },
              marginBottom: "60px",
              overflowX: "scroll",
              msOverflowStyle: "none" /* IE and Edge */,
              scrollbarWidth: "none" /* Firefox */,
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {posts.map((post) => (
              <Postcard
                id={post.id}
                image={post.image}
                title={post.title}
                details={post.details}
                date={post.date}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "50px 25px", md: "100px 70px" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#07304A",
            borderRadius: "15px",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              padding: { xs: "30px 30px 60px", md: "50px" },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: { xs: "28px", md: "32px" },
                marginTop: { xs: "10px", md: "50px" },
                marginBottom: "20px",
              }}
            >
              Contact us
            </Typography>
            <Typography
              sx={{
                color: "#FFFFFFCC",
                fontSize: { xs: "16px", md: "18px" },
                width: { xs: "100%", md: "80%" },
                marginBottom: "40px",
              }}
            >
              Together, we can turn ideas into innovation and make technological
              breakthroughs a reality.
            </Typography>
            <MyButton
              as={"a"}
              href="/collaborate"
              sx={{
                fontWeight: 500,
              }}
            >
              Contact us
            </MyButton>
          </Box>
          <Box
            sx={{
              // width: { xs: "285px" },
              // height: { xs: "285px" },
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            <img
              src={techie}
              height="100%"
              width="auto"
              alt="a man pressing a computer"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
