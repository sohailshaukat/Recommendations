import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Text, Grid, useColorMode, GridItem } from "@chakra-ui/react";

import Control from "./components/Control";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

import recommendations from "./Recommendations";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [recommendationIndex, setRecommendationIndex] = useState(0);

  const nextRecommendation = (): void => {
    setRecommendationIndex((prevState: number) => {
      return prevState + 1 === recommendations.length ? 0 : prevState + 1;
    });
  };

  const prevRecommendation = (): void => {
    setRecommendationIndex((prevState: number) => {
      return prevState === 0 ? recommendations.length - 1 : prevState - 1;
    });
  };


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
  },[toggleColorMode])

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
        <MainContent recItem={recItem}/>
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
