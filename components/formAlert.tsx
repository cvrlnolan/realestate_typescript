import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

type Props = {
  title: string;
  testId?: string;
};

export default function AlertPop({ title, testId }: Props) {
  return (
    <>
      <Alert my={1} status="error" data-testid={testId} variant="left-accent">
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
      </Alert>
    </>
  );
}
