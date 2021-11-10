import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

type Props = {
  title: string;
};

export default function AlertPop({ title }: Props) {
  return (
    <>
      <Alert my={1} status="error" variant="left-accent">
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
      </Alert>
    </>
  );
}
