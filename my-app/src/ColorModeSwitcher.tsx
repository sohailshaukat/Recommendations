import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  Center,
  CenterProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionIcon = motion<CenterProps>(Center);

export const ColorModeSwitcher: React.FC<{}> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const transition = {
    type: "spring",
    velocity: 1,
    damping: 10,
  };

  const variants = {
    initial: { scale: 0.8, rotate: 120 },
    animate: { scale: 1.2, rotate: -30, transition },
    whileTap: { scale: 0.9, rotate: 45 },
    whileHover: { scale: 1.2, rotate: -15 },
  };

  return (
    <MotionIcon
      fontSize="lg"
      color="current"
      marginLeft="4px"
      padding="16px"
      onClick={toggleColorMode}
      aria-label={`Switch to ${text} mode`}
      whileTap="whileTap"
      whileHover="whileHover"
      animate="animate"
      variants={variants}
      initial="initial"
    >
      <SwitchIcon />
    </MotionIcon>
  );
};
