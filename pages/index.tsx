import React from "react";
import { Flex, Stack, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import bannerImg from "public/image.jpeg";

const Home = () => {
  return (
    <>
      <Head>
        <title>RealEstates</title>
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
            priority
          />
          <Flex p={4} w="full" pos="absolute" justifyContent="center">
            <Stack spacing={4} textColor="white">
              <Text
                fontSize="4xl"
                fontWeight="bold"
                textAlign="center"
                letterSpacing="tight"
              >
                Welcome to RealEstates
              </Text>
              <Text fontSize="2xl" textAlign="center" letterSpacing="tight">
                Visit, buy or rent.
              </Text>
              <Link href="/listings" passHref>
                <Button colorScheme="blue">Show Listings</Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Navbar>
    </>
  );
};

export default Home;
