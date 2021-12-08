import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Estate } from "@prisma/client";

type Props = {
  estate: Estate;
};

const NewCard = ({ estate }: Props) => {
  return (
    <>
      <Box w="350px" h="250px" pos="relative">
        <Image
          alt="estate_img"
          src={estate.imgUrl}
          layout="fill"
          objectFit="cover"
        />
        <Flex
          flexDir="column"
          w="full"
          p={4}
          pos="absolute"
          textColor="gray.100"
          _hover={{ textColor: "white" }}
        >
          <Text fontWeight="bold">{estate.title}</Text>
          <Text fontWeight="bold">{estate.country}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default NewCard;
