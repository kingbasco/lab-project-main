import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import WelcomeScreen from "./screen/WelcomeScreen/WelcomeScreen";
import LabresourceScreen from "./screen/LabresourceScreen";
import BlogScreen from "./screen/BlogScreen";
import ResearchScreen from "./screen/ResearchScreen";
import AboutScreen from "./screen/AboutScreen";
import CollaborateScreen from "./screen/CollaborateScreen";
import BlogpostScreen from "./screen/BlogpostScreen";
import Footer from "./components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/lab-resources" element={<LabresourceScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/research-publications" element={<ResearchScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/collaborate" element={<CollaborateScreen />} />
          <Route path="/blog-post" element={<BlogpostScreen />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
