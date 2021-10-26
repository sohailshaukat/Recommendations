import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { Heading, HeadingProps, HStack, VStack } from "@chakra-ui/layout";
import { StackProps, Text, TextProps, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Profile: React.FC<{
  name: string;
  headline: string;
  relation: string;
  avatar: string;
}> = (props) => {
  const MotionVStack = motion<StackProps>(VStack);
  const MotionHStack = motion<StackProps>(HStack);
  const MotionAvatar = motion<AvatarProps>(Avatar);
  const MotionHeading = motion<HeadingProps>(Heading);
  const MotionText = motion<TextProps>(Text);

  const { colorMode } = useColorMode();

  const HStackVariant = {
    show: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      scale: 0.2,
    },
  };

  const AvatarVariant = {
    show: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
  };

  const VStackVariant = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.6,
      },
    },
    hidden: {
      x: 100,
      opacity: 0.8,
    },
  };

  const ContentVariant = {
    hidden: {
      scale: 0.2,
      opacity: 0,
    },
    show: {
      scale: [0.6, 1],
      opacity: [0.2, 1],
    },
  };

  return (
    <MotionHStack
      animate="show"
      initial="hidden"
      variants={HStackVariant}
      pl="12%"
    >
      <MotionAvatar
        variants={AvatarVariant}
        size="xl"
        name={props.name}
        bg="red.500"
        src={props.avatar}
      />
      <MotionVStack variants={VStackVariant} align="normal" pl="20px">
        <MotionHeading
          variants={ContentVariant}
          color={colorMode === "light" ? "black.900" : "white.50"}
          as="h3"
          size="sm"
          lineHeight="100%"
        >
          {props.name}
        </MotionHeading>
        <MotionText variants={ContentVariant} fontSize="xs" lineHeight="100%">
          {props.headline}
        </MotionText>
        <MotionText
          variants={ContentVariant}
          fontSize="xs"
          lineHeight="100%"
          color="white.900"
        >
          {props.relation}
        </MotionText>
      </MotionVStack>
    </MotionHStack>
  );
};

export default Profile;
