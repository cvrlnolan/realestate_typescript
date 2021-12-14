import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import {
  Wrap,
  Flex,
  Box,
  Text,
  Stack,
  List,
  ListItem,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  FaChair,
  FaThermometerFull,
  FaRegSnowflake,
  FaWifi,
  FaCar,
  FaStar,
} from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import faker from "faker";

const Index: NextPage = () => {
  const router = useRouter();

  const toast = useToast();

  const { id } = router.query;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data: estate, error } = useSWR(() => "/api/estate/" + id, fetcher);

  if (error) {
    return <>{error.message}</>;
  }

  if (!estate) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  let rating = 0;

  const handleRating = async (rate: number) => {
    console.log(rate);
    const ratingData = {
      rating: rate,
      estateId: estate.id,
    };
    const update = await axios.post("/api/estate/rate", ratingData);
    if (update.data.message === "Ok") {
      toast({
        title: "Estate Rated !",
        description:
          "Thank you for rating us & evaluating how you feel about our property.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Estate</title>
      </Head>
      <Navbar>
        <Flex flexDir="column" w="full" mt={8} p={4}>
          <Wrap
            w={{ sm: "full", lg: "80%" }}
            mx={{ lg: "auto" }}
            p={4}
            spacing="50px"
          >
            <Box
              w="450px"
              h="350px"
              display="block"
              mx={{ sm: "auto", lg: "0" }}
              pos="relative"
            >
              <Image
                alt="estate_img"
                src={estate.imgUrl}
                layout="fill"
                objectFit="cover"
                className="page_image"
                priority
              />
            </Box>
            <Stack w={{ sm: "full", lg: "40%" }} direction="column" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold">
                {estate.title}
              </Text>
              <Stack direction="row" spacing={4} alignItems="center">
                <Text fontSize="lg" fontWeight="bold">{`USD${estate.price}${
                  estate.status === "rent" && "/month"
                }`}</Text>
                <Flex>
                  {[...Array(5)].map((_, i: number) => (
                    <StarIcon
                      key={i}
                      color={
                        i < estate.totalRating / estate.reviews
                          ? "yellow.500"
                          : "gray.300"
                      }
                    />
                  ))}
                </Flex>
                <IconButton
                  aria-label="rate_estate"
                  icon={<FaStar />}
                  rounded="full"
                  variant="outline"
                  onClick={onOpen}
                />
              </Stack>
              <Text>{estate.property_briefing}</Text>
              <Text>
                {`${estate.address}, ${estate.province} ${estate.country}`}
              </Text>
            </Stack>
          </Wrap>
          <Flex w={{ sm: "w-full", lg: "80%" }} mx={{ lg: "auto" }} p={4}>
            <List
              display={{ sm: "block", lg: "inline-flex" }}
              spacing={{ sm: 4, lg: 0 }}
            >
              <ListItem>
                <Flex
                  alignItems="center"
                  textDecoration={estate.furniture ? "line-through" : ""}
                >
                  <span style={{ display: "inline-flex", marginRight: "5px" }}>
                    <FaChair />
                  </span>
                  Furnitured
                </Flex>
              </ListItem>
              <ListItem ml={{ lg: 4 }}>
                <Flex
                  alignItems="center"
                  textDecoration={estate.heating ? "line-through" : ""}
                >
                  <span style={{ display: "inline-flex", marginRight: "5px" }}>
                    <FaThermometerFull />
                  </span>
                  Heating
                </Flex>
              </ListItem>
              <ListItem ml={{ lg: 4 }}>
                <Flex
                  alignItems="center"
                  textDecoration={estate.cooling ? "line-through" : ""}
                >
                  <span style={{ display: "inline-flex", marginRight: "5px" }}>
                    <FaRegSnowflake />
                  </span>
                  Cooling
                </Flex>
              </ListItem>
              <ListItem ml={{ lg: 4 }}>
                <Flex
                  alignItems="center"
                  textDecoration={estate.internet ? "line-through" : ""}
                >
                  <span style={{ display: "inline-flex", marginRight: "5px" }}>
                    <FaWifi />
                  </span>
                  Internet
                </Flex>
              </ListItem>
              <ListItem
                ml={{ lg: 4 }}
                textDecoration={estate.parking ? "line-through" : ""}
              >
                <Flex alignItems="center">
                  <span style={{ display: "inline-flex", marginRight: "5px" }}>
                    <FaCar />
                  </span>
                  Parking
                </Flex>
              </ListItem>
            </List>
          </Flex>
          <Flex w={{ sm: "w-full", lg: "80%" }} mx={{ lg: "auto" }} p={4}>
            <Text>{faker.lorem.sentences(10)}</Text>
          </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Rate your visit</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                transition={true}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Navbar>
    </>
  );
};

export default Index;
