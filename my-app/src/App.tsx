import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { Box, Text, Grid, useColorMode, GridItem } from "@chakra-ui/react";

import Control from "./components/Control";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

import recommendations from "./recommendations";
import { useAnimation } from "framer-motion";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [recommendationIndex, setRecommendationIndex] = useState(0);

  const contentControls = useAnimation();
  // const 

  const nextRecommendation = useCallback((): void => {
    contentControls.start({
      x:["0%","10%", "-10%", "0%"],
      opacity:[0, 0.2, 0.8, 1],
    })
    setRecommendationIndex((prevState: number) => {
      return prevState + 1 === recommendations.length ? 0 : prevState + 1;
    });

  },[contentControls]);

  const prevRecommendation = useCallback((): void => {
    contentControls.start({
      x:["0%","-10%", "10%", "0%"],
      opacity:[0, 0.2, 0.8, 1],
    })
    setRecommendationIndex((prevState: number) => {
      return prevState === 0 ? recommendations.length - 1 : prevState - 1;
    });
  }, [contentControls]);


  useEffect(()=>{
    document.addEventListener("keydown", (event:any) =>{
      if(event.key==="ArrowRight"){
        nextRecommendation();
      }
      if(event.key==="ArrowLeft"){
        prevRecommendation();
      } 
      if(event.code==="Space"){
        console.log("space tapped")
        toggleColorMode();
      }
    })
  },[toggleColorMode, nextRecommendation, prevRecommendation])

  const recItem = recommendations[recommendationIndex]; 

  return (
    <Box >
      <Grid
        bg={colorMode === "dark" ? "black.900" : "white.50"}
        mt="52px"
        pt="16px"
        mx={{ sm: "16px", md: "10%" }}
        maxH={{ sm: "90vh", md: "82vh" }}
        boxShadow="2xl"
        rounded="lg"
        templateRows="repeat(10, 0.5fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ sm: "14px", md: "22px" }}
        pr={{ sm: "16px", md: "4%" }}
        pl={{ sm: "16px", md: "0" }}
        overflow="clip"
      >
        <GridItem rowSpan={8} colSpan={1}>
          <Text
            lineHeight="100%"
            textAlign="right"
            fontSize="144"
            fontFamily="Happy Monkey"
          >
            “
          </Text>
        </GridItem>
        <MainContent contentControl={contentControls} recItem={recItem}/>
        <Control
          index={recommendationIndex}
          next={nextRecommendation}
          prev={prevRecommendation}
        />
        <Footer />
      </Grid>
    </Box>
  );
};
