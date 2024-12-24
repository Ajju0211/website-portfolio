import MyInfo from "../../components/Persnal-Info/MyInfo";
import Technologies from "../../components/ Technologies/Technologies";
import Footer from "../../components/Footer/Footer";
import { background } from "../../assets/";
import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "../Project/Projects";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "../Contact/Contact";
import Education from "../../components/Education/Education"
import About from "../About/About";
import GitHubProfile from "../../components/github/GitHubProfile";

const pageVariants = {
  initial: { opacity: 6, scale: 0.9, x: -100 },
  animate: { opacity: 6, scale: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.5, x: 100, transition: { duration: 0.5 } },
};

const HomePage = () => {
  const location = useLocation();
  const style = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={style} className="overflow-auto scrollbar-none">
      <div className="flex flex-col  mx-auto  z-[999]">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-wrap sm:items-center sm:justify-center"
                >
                  <div className="flex flex-col xl:flex-row xl:m-2 xl:gap-9 itmes-center justify-center h-full w-screen sm:h-auto sm:w-auto">
                    <div className="flex flex-col items-center justify-center h-full w-screen sm:h-auto sm:w-auto">
                      <MyInfo />
                      <Technologies />
                    </div>
                    <div className="flex flex-col items-center justify-center h-full w-screen sm:h-auto sm:w-auto">
                    <Education />
                    </div>
                  </div>
                  <div className="ml-20 mt-52 h-full w-full sm:h-auto sm:w-auto">
                  </div>
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/github"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <GitHubProfile />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
