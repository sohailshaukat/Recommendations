import { GridItem, HStack, useColorMode, VStack, Kbd } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { ReactComponent as DarkLogo } from "../LinkedInLogo/LinkedIn_Dark.svg";
import { ReactComponent as LightLogo } from "../LinkedInLogo/LinkedIn_White.svg";

const Footer: React.FC<{}> = (props) => {
  const { colorMode } = useColorMode();

  return (
    <GridItem mx="auto" pb={{ sm: "16px", md: "20px" }} rowSpan={1} colSpan={6}>
      <HStack>
        <motion.a
          whileHover={{scale:1.08}}
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/sohailshaukat/"
        >
          {colorMode === "light" ? <DarkLogo /> : <LightLogo />}
        </motion.a>
        <VStack>
          <ColorModeSwitcher />
          <Kbd>space</Kbd>
        </VStack>
      </HStack>
    </GridItem>
  );
};

export default Footer;
