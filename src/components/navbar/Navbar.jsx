import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/gautam-uniyal-a4a6b1278/">
            <img src="/linkedinz.png" alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/gauta1853/">
            <img src="/leetcodez.png" alt="Leetcode" />
          </a>
          <a href="https://www.kaggle.com/gautam888">
            <img src="/kagglez.png" alt="Kaggle" />
          </a>
          <a href="https://github.com/gautam324">
            <img src="/githubz.png" alt="GitHub" />
          </a>
          <a href="https://codeforces.com/profile/gautamuniyal">
            <img src="/codeforcesz.png" alt="Codeforces" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
