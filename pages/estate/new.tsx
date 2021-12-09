import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import faker from "faker";

const Index: NextPage = () => {
  return (
    <>
      <Navbar>
        <Flex w="full" mt={8} p={4}>
          <Stack
            direction="row"
            w="full"
            p={4}
            spacing={8}
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
              <Text>{faker.lorem.sentences(10)}</Text>
            </Stack>
          </Stack>
        </Flex>
      </Navbar>
    </>
  );
};

export default Index;
