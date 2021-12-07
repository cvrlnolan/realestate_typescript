import React from "react";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import bannerImg from "public/image.jpeg";

const Home = () => {
  return (
    <>
      <Head>
        <title>RealEstates | Listings</title>
      </Head>
      <Navbar>
        <Flex
          w="full"
          h={{ sm: 200, md: 500 }}
          pos="relative"
          alignItems="center"
        >
          <Image
            alt="intro"
            src={bannerImg}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
          <Flex p={4} w="full" pos="absolute" justifyContent="center">
            <Stack spacing={4} textColor="white">
              <Text
                fontSize="4xl"
                fontWeight="bold"
                textAlign="center"
                letterSpacing="tight"
              >
                Welcome to RealEstate
              </Text>
              <Text fontSize="2xl" textAlign="center" letterSpacing="tight">
                Visit, buy or rent.
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Navbar>
    </>
  );
};

export default Home;
