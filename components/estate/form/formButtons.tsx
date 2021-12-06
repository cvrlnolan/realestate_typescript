import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowBackIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import type { Props } from "@/assets/types";

const FormButtons = (props: Props) => {
  return (
    <>
      <Stack direction="row" spacing={2} alignSelf="center">
        {props.page > 0 && (
          <Button
            variant="ghost"
            leftIcon={<ArrowBackIcon />}
            onClick={() => props.goBack()}
          >
            Back
          </Button>
        )}
        {props.page < 6 && (
          <Button
            variant="ghost"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => props.goNextPage()}
          >
            Next
          </Button>
        )}
      </Stack>
      {props.page === 6 && (
        <Button
          type="submit"
          leftIcon={<CheckCircleIcon />}
          colorScheme="green"
          isDisabled={!props.isValid}
        >
          Submit
        </Button>
      )}
    </>
  );
};

export default FormButtons;
