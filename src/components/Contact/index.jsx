import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { FormControl, InputLabel } from "@mui/material";
import MyTextField from "../MyTextField";
import MyButton from "../Button";
import { styled } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckList = styled("a")(({ theme }) => ({
  "& a": {
    textDecoration: "none",
    listStyleType: "none",
    color: "#0087CA",
    fontWeight: "500",
  },
  "& a:visited": {
    color: "#0087CA",
  },
  "& a:hover": {
    color: "#0087CA",
  },
}));

const ContactScreen = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
      }}
    >
      <Box
        sx={{
          padding: { xs: "0px", md: "0px" },
          marginBottom: "40px",
        }}
      >
        <Typography
          sx={{
            color: "#101828",
            fontWeight: 600,
            fontSize: "32px",
            mb: "1rem",
          }}
        >
          Contact us here
        </Typography>
        <Typography
          sx={{
            color: "#667085",
            fontSize: "16px",
            fontWeight: 400,
            mb: "3rem",
          }}
        >
          We’d love to hear from you. Please fill out this form or shoot us an
          email.
        </Typography>
        <Box
          sx={{
            display: { xS: "block", md: "grid" },
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            <Box>
              <EmailOutlinedIcon sx={{ color: "#0087CA" }} />
              <Typography
                sx={{
                  color: "#101828",
                  fontWeight: 500,
                  fontSize: "18px",
                  mb: "1rem",
                }}
              >
                Email
              </Typography>
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 400,
                  fontSize: "14px",
                  mb: "1rem",
                }}
              >
                Our friendly team is here to help
              </Typography>
              <CheckList>
                <a href="#">hi@untitledui.com</a>
              </CheckList>
            </Box>
            <Box>
              <IoChatbubbleOutline color="#0087CA" />
              <Typography
                sx={{
                  color: "#101828",
                  fontWeight: 500,
                  fontSize: "18px",
                  mt: "0.5rem",
                  mb: "1rem",
                }}
              >
                Live chat
              </Typography>
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 400,
                  fontSize: "14px",
                  mb: "1rem",
                }}
              >
                Our friendly team is here to help
              </Typography>
              <CheckList>
                <a href="#">start a new chat</a>
              </CheckList>
            </Box>
            <Box>
              <TfiLocationPin color="#0087CA" />
              <Typography
                sx={{
                  color: "#101828",
                  fontWeight: 500,
                  fontSize: "18px",
                  mb: "1rem",
                }}
              >
                Office
              </Typography>
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 400,
                  fontSize: "14px",
                  mb: "1rem",
                }}
              >
                Come say hello at our office HQ
              </Typography>
              <CheckList>
                <a href="#">SLIT,FUTA OBANLA, AKURE, ONDO</a>
              </CheckList>
            </Box>
            <Box>
              <FiPhone color="#0087CA" />
              <Typography
                sx={{
                  color: "#101828",
                  fontWeight: 500,
                  fontSize: "18px",
                  mb: "1rem",
                }}
              >
                Phone
              </Typography>
              <Typography
                sx={{
                  color: "#667085",
                  fontWeight: 400,
                  fontSize: "14px",
                  mb: "1rem",
                }}
              >
                Mon-Fri from 9am to 5pm.
              </Typography>
              <CheckList>
                <a href="#">+1 (555) 000-0000</a>
              </CheckList>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F9FAFB",
              padding: { xs: "20px", md: "40px" },
              borderRadius: "10px",
              mt: { xs: "20px" },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", md: "grid" },
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              <FormControl variant="standard" fullWidth>
                <InputLabel shrink htmlFor={"fname"}>
                  First Name
                </InputLabel>
                <MyTextField
                  id={"fname"}
                  placeholder="First name"
                  name="name"
                  type="text"
                ></MyTextField>
              </FormControl>
              <FormControl variant="standard" fullWidth>
                <InputLabel shrink htmlFor={"lname"}>
                  Last Name
                </InputLabel>
                <MyTextField
                  id={"lname"}
                  placeholder="Last name"
                  name="name"
                  type="text"
                ></MyTextField>
              </FormControl>
            </Box>
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
              <InputLabel shrink htmlFor={"help"}>
                How can we help?
              </InputLabel>
              <MyTextField
                id={"help"}
                name="help"
                type="text"
                multiline
                minRows={4}
                maxRows={4}
                fullWidth
              ></MyTextField>
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label="You agree to our privacy policy."
            />
            <FormControl variant="standard" fullWidth>
              <MyButton
                as={"a"}
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  fontWeight: "500",
                  mt: "1rem",
                }}
              >
                Send message
              </MyButton>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126638.18334310171!2d5.005499092082943!3d7.303998527414829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047894972021f41%3A0xd84c4e01abf1d646!2sFederal%20University%20of%20Technology%20Akure!5e0!3m2!1sen!2sng!4v1705410929351!5m2!1sen!2sng"
          width="1000"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactScreen;
