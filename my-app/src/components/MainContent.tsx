import { GridItem, Text, TextProps, useColorMode } from "@chakra-ui/react";
import { AnimationControls, motion } from "framer-motion";
import React, { useEffect } from "react";
import Profile from "./Profile";

const MotionText = motion<TextProps>(Text);

const MainContent: React.FC<{
  recItem: {
    name: string;
    headline: string;
    relation: string;
    avatar: string;
    text: string;
  },
  contentControl: AnimationControls;
}> = (props) => {
  const { colorMode } = useColorMode();

  useEffect(()=>{
    props.contentControl.start({
      y:0,
    })
  },[props.contentControl]);

  return (
    <>
      <GridItem rowSpan={1} colSpan={5}></GridItem>
      <GridItem
        rowSpan={7}
        colSpan={5}
        textAlign="justify"
        minW="100%"
        overflowY="auto"
        overflowX="clip"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: colorMode === "light" ? "#262625" : "#bfbfbd",
            borderRadius: "24px",
          },
        }}
      >
        <MotionText
          animate={props.contentControl}
          initial={{
            y:"-100vh"
          }}
          mr={{ sm: "10%", md: "10%" }} fontSize="16" lineHeight="135%">
          {props.recItem.text}
        </MotionText>
      </GridItem>
      <GridItem rowSpan={1} colSpan={6}>
        <Profile
          name={props.recItem.name}
          headline={props.recItem.headline}
          relation={props.recItem.relation}
          avatar={props.recItem.avatar}
        />
      </GridItem>
    </>
  );
};

export default MainContent;
