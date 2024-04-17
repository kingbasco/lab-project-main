import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import researcher from "../../assets/images/researcher.png";
import { FormControl, InputLabel } from "@mui/material";
import MyTextField from "../../components/MyTextField";
import MyButton from "../../components/Button";

const CollaborateScreen = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
      }}
    >
      <Box sx={{ padding: { xs: "50px 30px 15px", md: "100px 100px 50px" } }}>
        <Typography sx={{ color: "#0087CA", fontWeight: 600 }}>
          Collaborate with us
        </Typography>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: { xs: "10px", md: "100px" },
          }}
        >
          <Typography
            sx={{
              color: "#101828",
              fontSize: { xs: "32px", md: "50px" },
              fontWeight: 600,
            }}
          >
            Let's work together
          </Typography>
          <Typography
            sx={{
              color: "#667085",
              fontSize: "18px",
              width: { xs: "100%", md: "50%" },
            }}
          >
            We focus on the details of everything we do. All to help businesses
            around the world focus on what’s most important to them. We take
            pride in this.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "grid" },
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingLeft: "0px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src={researcher}
            alt="a woman in a lab coat looking into a microscope"
            width="100%"
            height="auto"
          />
        </Box>
        <Box
          sx={{
            padding: { xs: "30px", md: "70px" },
          }}
        >
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor={"name"}>
              Name
            </InputLabel>
            <MyTextField
              id={"name"}
              placeholder="Your name"
              name="name"
              type="text"
            ></MyTextField>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor={"email"}>
              Email
            </InputLabel>
            <MyTextField
              id={"email"}
              placeholder="you@company.com"
              name="email"
              type="text"
            ></MyTextField>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor={"phonenumber"}>
              Phone Number
            </InputLabel>
            <MyTextField
              id={"phonenumber"}
              placeholder="+234 0000 0000"
              name="phonenumber"
              My
              type="text"
            ></MyTextField>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor={"help"}>
              How can we help?
            </InputLabel>
            <MyTextField
              id={"help"}
              placeholder="Tell us a little about the project"
              name="help"
              type="text"
              multiline
              minRows={4}
              maxRows={4}
              fullWidth
            ></MyTextField>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <MyButton
              as={"a"}
              sx={{
                textTransform: "capitalize",
                textAlign: "center",
                fontWeight: "500",
                mt: "2rem",
              }}
            >
              Get started
            </MyButton>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default CollaborateScreen;
