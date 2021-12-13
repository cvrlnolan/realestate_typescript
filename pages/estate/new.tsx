import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { Wrap, Flex, Box, Text, Stack, List, ListItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import faker from "faker";

const Index: NextPage = () => {
  return (
    <>
      <Navbar>
        <Flex flexDir="column" w="full" mt={8} p={4}>
          <Wrap w="full" justify="center" spacing="50px">
            <Box
              w="450px"
              h="350px"
              display="block"
              mx={{ sm: "auto", lg: "0" }}
              pos="relative"
            >
              <Image
                alt="estate_img"
                src="/image.jpeg"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
            <Stack w={{ sm: "full", lg: "40%" }} direction="column" spacing={4}>
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
              <Text>
                {faker.address.streetAddress()}, {faker.address.state()}{" "}
                {faker.address.country()}
              </Text>
            </Stack>
          </Wrap>
          <Flex w={{ sm: "w-full", lg: "80%" }} mx={{ lg: "auto" }} p={4}>
            <List
              display={{ sm: "block", lg: "inline-flex" }}
              spacing={{ sm: 4, lg: 0 }}
            >
              <ListItem>Furnitured</ListItem>
              <ListItem ml={{ lg: 4 }}>Heating</ListItem>
              <ListItem ml={{ lg: 4 }}>Cooling</ListItem>
              <ListItem ml={{ lg: 4 }}>Internet</ListItem>
              <ListItem ml={{ lg: 4 }}>Parking</ListItem>
            </List>
          </Flex>
          <Flex w={{ sm: "w-full", lg: "80%" }} mx={{ lg: "auto" }} p={4}>
            <Text>{faker.lorem.sentences(10)}</Text>
          </Flex>
        </Flex>
      </Navbar>
    </>
  );
};

export default Index;
