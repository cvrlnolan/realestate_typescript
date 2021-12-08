import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Estate } from "@prisma/client";

type Props = {
  estate: Estate;
};

const NewCard = ({ estate }: Props) => {
  return (
    <>
      <Link href={`estate/${estate.id}`} passHref>
        <Box w="350px" h="250px" pos="relative">
          <Image
            alt="estate_img"
            src={estate.imgUrl}
            layout="fill"
            objectFit="cover"
            className="card_image"
          />
          <Flex
            flexDir="column"
            w="full"
            h="full"
            p={4}
            pos="absolute"
            textColor="gray.100"
            justifyContent="space-between"
            _hover={{ textColor: "white", cursor: "pointer" }}
          >
            <Flex flexDir="column" w="full">
              <Text fontWeight="bold" fontSize="xs" textTransform="uppercase">
                {estate.country}
              </Text>
              <Text fontWeight="bold" textTransform="capitalize">
                {estate.title}
              </Text>
            </Flex>
            <Flex flexDir="column" w="full" alignItems="end">
              <Text>
                {estate.bedrooms} Bedrooms, {estate.baths} Baths -{" "}
                {estate.surface_area}sqft
              </Text>
              <Text>${estate.price}</Text>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </>
  );
};

export default NewCard;
