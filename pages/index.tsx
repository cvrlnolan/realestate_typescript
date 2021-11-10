import React from "react";
import { GetStaticProps } from "next";
import { Container, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "@/components/layout/navbar";
import EstateCard from "@/components/estate/estateCard";
import { prisma } from "@/lib/prisma";
import { Estate } from ".prisma/client";

type Props = {
  estatesData: Estate[];
};

const Home = ({ estatesData }: Props) => {
  return (
    <>
      <Head>
        <title>RealEstates | Listings</title>
      </Head>
      <Navbar>
        <Container maxW="container.xl" w="full" centerContent>
          <SimpleGrid columns={[1, 2, 2, 3]} spacing="20px">
            {estatesData.map((estate) => (
              <EstateCard key={estate.id} estate={estate} />
            ))}
          </SimpleGrid>
        </Container>
      </Navbar>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const estates = await prisma.estate.findMany({
    orderBy: {
      createDate: "desc",
    },
  });
  return {
    props: {
      estatesData: JSON.parse(JSON.stringify(estates)),
    },
    revalidate: 10,
  };
};

export default Home;
