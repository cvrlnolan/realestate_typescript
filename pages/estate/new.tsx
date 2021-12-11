import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { Flex, Box, Text, Stack, HStack } from "@chakra-ui/react";
import { StarIcon, CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import faker from "faker";

const Index: NextPage = () => {
  return (
    <>
      <Navbar>
        <Flex flexDir="column" w="full" mt={8} p={4}>
          <Stack
            direction="row"
            w="full"
            p={4}
            spacing={16}
            justifyContent="center"
          >
            <Box w="450px" h="350px" pos="relative">
              <Image
                alt="estate_img"
                src="/image.jpeg"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
            <Stack w="40%" direction="column" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold">
                {faker.random.words(4)}
              </Text>
              <Stack direction="row" spacing={4} alignItems="center">
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                >{`USD${faker.finance.amount(500, 10000)}`}</Text>
                <Flex>
                  {[...Array(5)].map((_, i: number) => (
                    <StarIcon
                      key={i}
                      color={i < 4 ? "yellow.500" : "gray.300"}
                    />
                  ))}
                </Flex>
              </Stack>
              <Text>{faker.lorem.sentences(10)}</Text>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            w="full"
            p={4}
            spacing={16}
            justifyContent="center"
          >
            <Stack direction="column" spacing={2}>
              <HStack spacing={2}>
                <Text color="gray.500">Furnitured</Text>
                {Math.random() < 0.5 ? <CheckIcon /> : <SmallCloseIcon />}
              </HStack>
              <HStack spacing={2}>
                <Text color="gray.500">Heating</Text>
                {Math.random() < 0.5 ? <CheckIcon /> : <SmallCloseIcon />}
              </HStack>
              <HStack spacing={2}>
                <Text color="gray.500">Cooling</Text>
                {Math.random() < 0.5 ? <CheckIcon /> : <SmallCloseIcon />}
              </HStack>
              <HStack spacing={2}>
                <Text color="gray.500">Internet</Text>
                {Math.random() < 0.5 ? <CheckIcon /> : <SmallCloseIcon />}
              </HStack>
              <HStack spacing={2}>
                <Text color="gray.500">Parking</Text>
                {Math.random() < 0.5 ? <CheckIcon /> : <SmallCloseIcon />}
              </HStack>
            </Stack>
            <Stack direction="column" spacing={4}>
              <Text>
                {faker.address.streetAddress()}, {faker.address.state()}{" "}
                {faker.address.country()}
              </Text>
              <Text></Text>
            </Stack>
          </Stack>
        </Flex>
      </Navbar>
    </>
  );
};

export default Index;
