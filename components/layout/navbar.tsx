import React, { ReactNode } from "react";
import {
  Box,
  Heading,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  useDisclosure,
  useColorModeValue,
  chakra,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";
import ThemeButton from "@/components/themeButton";

type Props = {
  children?: ReactNode;
};

type LinkProps = {
  children?: ReactNode;
  linkHoverColor?: string;
  linkRef: string;
};

const Links = [
  { key: "Listings", text: "Listings", href: "/listings" },
  {
    key: "Reposirtory",
    text: "Repository",
    href: "https://github.com/cvrlnolan/realestate_typescript",
  },
];

const NavLink = ({ children, linkHoverColor, linkRef }: LinkProps) => (
  <Link href={linkRef} passHref>
    <chakra.a
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        color: linkHoverColor,
        cursor: "pointer",
      }}
    >
      {children}
    </chakra.a>
  </Link>
);

export default function Navbar({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = useColorModeValue("blue.600", "blue.100");
  const linkHoverColor = useColorModeValue("teal.700", "teal.400");

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        w="full"
        px={4}
        shadow="lg"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/" passHref>
              <Heading
                fontSize={{ sm: "lg", md: "xl" }}
                _hover={{ cursor: "pointer" }}
              >
                RealEstates
              </Heading>
            </Link>
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink
                  key={link.key}
                  linkRef={link.href}
                  linkHoverColor={linkHoverColor}
                >
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Link href="/estate/add" passHref>
              <Button mr={2} leftIcon={<AddIcon />} variant="outline" size="sm">
                Add Estate
              </Button>
            </Link>
            <ThemeButton />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.key}
                  linkRef={link.href}
                  linkHoverColor={linkHoverColor}
                >
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Flex flexDir="column" w="full">
        <Flex flexDir="row" w="full" minH="md">
          {children}
        </Flex>
        <Flex w="full" h="20px" p={8}>
          <Text w="full" textAlign="center" fontWeight="bold">
            Developed by
            <Link href="https://carlnolan.lootyclub.com" passHref>
              <Text
                display="inline-flex"
                ml={1}
                color={linkColor}
                cursor="pointer"
                _hover={{
                  color: useColorModeValue("blue.200", "blue.400"),
                }}
                transition="all"
                transitionDuration="0.5s"
              >
                Carl Nolan
              </Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
