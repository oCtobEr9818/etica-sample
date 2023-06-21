import { motion } from "framer-motion";
import { motionVariants } from "../motionSettings";

export const Layout = ({ children }) => (
  <motion.div
    className="container"
    variants={motionVariants}
    initial="initial"
    animate="enter"
    exit="exit"
    transition={{ duration: 0.3, type: "linear" }}
  >
    {children}
  </motion.div>
);
