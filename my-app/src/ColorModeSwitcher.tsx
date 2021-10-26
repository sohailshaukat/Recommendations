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
    stiffness:60,
    damping: 5,
  };

  const variants = {
    initial: { scale: 0.9 },
    animate: { scale: 1.1, rotate: -30, transition },
    whileTap: { scale: 0.9, rotate: 270 },
    whileHover: { scale: 1.4, rotate: 0 },
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
      cursor="pointer"
    >
      <SwitchIcon/>
    </MotionIcon>
  );
};
