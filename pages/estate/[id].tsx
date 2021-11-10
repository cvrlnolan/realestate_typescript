import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  HStack,
  SimpleGrid,
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
  Skeleton,
  chakra,
} from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import { StarIcon, CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Navbar from "@/components/layout/navbar";

const EstatePage: NextPage = () => {
  const router = useRouter();

  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id } = router.query;

  const [rating, setRating] = useState(0);

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

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data: estate, error } = useSWR(() => "/api/estate/" + id, fetcher);

  if (error) {
    return (
      <>
        <div>{error.message}</div>
      </>
    );
  }

  if (!estate) {
    return (
      <>
        <Navbar>
          <Skeleton height="container.xl">
            <Box
              maxW="container.xl"
              w="full"
              p={8}
              rounded="lg"
              boxShadow="lg"
            ></Box>
          </Skeleton>
        </Navbar>
      </>
    );
  }

  type Dimensions = {
    h: string | number;
    w: string | number;
  };

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const shimmer = ({ w, h }: Dimensions) => `
      <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
          </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
      </svg>
  `;

  return (
    <>
      <Head>
        <title>RealEstate | {estate.title}</title>
      </Head>
      <Navbar>
        <Box maxW="container.xl" w="full" p={8} rounded="lg" boxShadow="lg">
          <Stack alignItems="center" spacing={5}>
            <Heading>{estate.title}</Heading>
            <HStack spacing={2}>
              <Flex>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
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
              <Text color="gray.500">{estate.reviews} reviews</Text>
            </HStack>
            <Box alignSelf="center" boxSize={["xs", "md"]} pos="relative">
              <Image
                src={estate.imgUrl}
                alt="estate_img"
                layout="fill"
                objectFit="cover"
                className="page_image"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer({ w: 400, h: 400 })
                )}`}
              />
            </Box>
            <Text color="gray.500" w="full">
              {estate.property_briefing}
            </Text>
            <SimpleGrid w="full" columns={[1, 2, 3]} spacing={10}>
              <Stack direction="column" spacing={2}>
                <Text color="gray.500">{estate.address}</Text>
                <Text color="gray.500">
                  {estate.postal_code}, {estate.province}
                </Text>
                <Text color="gray.500">{estate.country}</Text>
              </Stack>
              <Stack direction="column" spacing={2}>
                <HStack spacing={2}>
                  <Text color="gray.500">Furnitured</Text>
                  {estate.furniture ? <CheckIcon /> : <SmallCloseIcon />}
                </HStack>
                <HStack spacing={2}>
                  <Text color="gray.500">Heating</Text>
                  {estate.heating ? <CheckIcon /> : <SmallCloseIcon />}
                </HStack>
                <HStack spacing={2}>
                  <Text color="gray.500">Cooling</Text>
                  {estate.cooling ? <CheckIcon /> : <SmallCloseIcon />}
                </HStack>
                <HStack spacing={2}>
                  <Text color="gray.500">Internet</Text>
                  {estate.internet ? <CheckIcon /> : <SmallCloseIcon />}
                </HStack>
                <HStack spacing={2}>
                  <Text color="gray.500">Parking</Text>
                  {estate.parking ? <CheckIcon /> : <SmallCloseIcon />}
                </HStack>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Text color="gray.500" fontWeight="bold">
                  Price: ${estate.price} {estate.status === "rent" && "/mo."}
                </Text>
                <Link href={`mailto:${estate.email}`} passHref>
                  <chakra.a
                    color="gray.500"
                    _hover={{
                      cursor: "pointer",
                      color: "teal.500",
                    }}
                  >
                    {estate.email}
                  </chakra.a>
                </Link>
                <Text color="gray.500">{estate.telephone}</Text>
              </Stack>
            </SimpleGrid>
            {estate.additional_info !== "" && (
              <Text color="gray.500" w="full">
                {estate.additional_info}
              </Text>
            )}
            <Button rightIcon={<StarIcon />} onClick={onOpen}>
              Rate Estate
            </Button>
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
          </Stack>
        </Box>
      </Navbar>
    </>
  );
};

export default EstatePage;
