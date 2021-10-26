import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Center, GridItem, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CenterProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionCenter = motion<CenterProps>(Center);

const Control: React.FC<{ index: number; next: () => void; prev: () => void }> =
  (props) => {
    const { colorMode } = useColorMode();

    return (
      <>
        <GridItem rowSpan={1} colSpan={2}>
          <MotionCenter
            onClick={props.prev}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeftIcon
            cursor="pointer"
              filter={`drop-shadow( 2px 2px 8px ${
                colorMode === "light"
                  ? "rgba(0, 0, 0, .5)"
                  : "rgba(255, 255, 255, .5)"
              })`}
              className="iconShadow"
              h={16}
              w={16}
            />
          </MotionCenter>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <Heading lineHeight="300%" textAlign="center" as="h4" size="md">
            {props.index + 1} / 5
          </Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <MotionCenter
            onClick={props.next}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRightIcon
            cursor="pointer"
              filter={`drop-shadow( 2px 2px 8px ${
                colorMode === "light"
                  ? "rgba(0, 0, 0, .5)"
                  : "rgba(255, 255, 255, .5)"
              })`}
              h={16}
              w={16}
            />
          </MotionCenter>
        </GridItem>
      </>
    );
  };

export default Control;
