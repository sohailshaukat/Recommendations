import { Avatar } from "@chakra-ui/avatar";
import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const Profile: React.FC<{
  name: string;
  headline: string;
  relation: string;
  avatar: string;
}> = (props) => {
  const { colorMode } = useColorMode();

  return (
    <HStack pl="12%">
      <Avatar size="xl" name={props.name} bg="red.500" src={props.avatar} />
      <VStack align="normal" pl="20px">
        <Heading
          color={colorMode === "light" ? "black.900" : "white.50"}
          as="h3"
          size="sm"
          lineHeight="100%"
        >
          {props.name}
        </Heading>
        <Text fontSize="xs" lineHeight="100%">
          {props.headline}
        </Text>
        <Text fontSize="xs" lineHeight="100%" color="white.900">
          {props.relation}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Profile;
