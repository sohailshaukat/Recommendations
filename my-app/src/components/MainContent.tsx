import { GridItem, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import Profile from "./Profile";

const MainContent: React.FC<{
  recItem: {
    name: string;
    headline: string;
    relation: string;
    avatar: string;
    text: string;
  };
}> = (props) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <GridItem rowSpan={1} colSpan={5}></GridItem>
      <GridItem
        rowSpan={7}
        colSpan={5}
        textAlign="justify"
        minW="100%"
        overflowY="auto"
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
        <Text mr={{ sm: "10%", md: "10%" }} fontSize="16" lineHeight="135%">
          {props.recItem.text}
        </Text>
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
