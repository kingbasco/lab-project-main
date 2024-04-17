import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import scaffold from "../../assets/images/scaffold.png";
import building from "../../assets/images/building.png";
import blank from "../../assets/images/blank.png";
import AboutCard from "./component/aboutcard";
import ContactScreen from "../../components/Contact";

const blanks = [
  {
    id: 0,
    header: "Olivia Rhye",
    title: "Founder & CEO",
    details:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: blank,
  },
  {
    id: 1,
    header: "Phoenix Baker",
    title: "Engineering Manager",
    details: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: blank,
  },
  {
    id: 2,
    header: "Lana Steiner",
    title: "Product Manager",
    details: "Former PM for Linear, Lambda School, and On Deck.",
    image: blank,
  },
  {
    id: 3,
    header: "Demi Wilkinson",
    title: "Frontend Developer",
    details: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: blank,
  },
  {
    id: 4,
    header: "Orlando Diggs",
    title: "Customer Success",
    details: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
    image: blank,
  },
  {
    id: 5,
    header: "Candace Wu",
    title: "Backend Developer",
    details: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    image: blank,
  },
  {
    id: 6,
    header: "Natalie Greg",
    title: "Product Designer",
    details: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image: blank,
  },
  {
    id: 7,
    header: "Drew Cano",
    title: "UX Researcher",
    details:
      "Lead user research for Slack. Contractor for Netflix and Udacity.",
    image: blank,
  },
];

const AboutScreen = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
        padding: { xs: "60px 25px", md: "100px" },
      }}
    >
      <Typography sx={{ color: "#0087CA", fontWeight: 600 }}>About</Typography>
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
          Mission:
        </Typography>
        <Typography
          sx={{
            color: "#667085",
            fontSize: "18px",
            width: { xs: "100%", md: "60%" },
          }}
        >
          To be a profitable tech firm leading innovations & supporting
          solutions that build and secure the future of Africa
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <img
          src={scaffold}
          alt="a tall net-like iron structure"
          width="100%"
          height="auto"
        />
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: { xs: "40px 0px", md: "100px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
            fontWeight: "bolder",
            // width: "50%",
            color: "#07304A",
            marginRight: { xs: "20px", md: "60px" },
            mb: { xs: "20px" },
          }}
        >
          Our mission is to transform operations with connectivity and reliable
          data to uncover new opportunities
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            // width: "60%",
            color: "#333333",
          }}
        >
          By leveraging a hyper-connected network of BLE devices and a
          centralized, highly customizable platform,  we take a proactive
          approach to understanding each client’s needs, and offer an
          unparalleled level of scrutiny, guidance, and leadership.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "120px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <img
            src={building}
            alt="a tall net-like iron structure"
            width="100%"
            height="auto"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              color: "#07304A",
              fontSize: "30px",
              mt: { xs: "30px" },
              marginBottom: { xs: "20px", md: "60px" },
            }}
          >
            Our Approach
          </Typography>
          <Typography
            sx={{ color: "#333333", fontSize: "14px", marginBottom: "20px" }}
          >
            Smart System Technologies stands as a pioneering laboratory
            dedicated to the advancement of 3D fabrications, prototyping, and
            innovative technology solutions. With a strong commitment to
            knowledge dissemination, skill enhancement, and fostering
            innovation, the laboratory serves as a hub for training aspiring
            engineers and providing them with invaluable internship
            opportunities.
          </Typography>
          <Typography sx={{ color: "#333333", fontSize: "14px" }}>
            Smart System Technologies has carved a niche for itself in the
            field, offering a range of cutting-edge services and fostering a
            dynamic learning environment
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              mt: "40px",
              mb: "20px",
              color: "#101828",
            }}
          >
            Meet our Team
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              //   mb: "40px",
              color: "#667085",
              margin: { xs: "0px 15px 20px", md: "0px 235px 40px" },
            }}
          >
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: "20px",
            mb: "60px",
          }}
        >
          {blanks.map((blank) => (
            <AboutCard
              id={blank.id}
              header={blank.header}
              title={blank.title}
              details={blank.details}
              image={blank.image}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <ContactScreen />
      </Box>
    </Box>
  );
};

export default AboutScreen;
