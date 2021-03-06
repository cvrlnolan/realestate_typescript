import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import AlertPop from "@/components/formAlert";
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";

const ContactInfo = (props: Props) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const emailPattern =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  const phonePattern = /^\+(?:[0-9] ?){8,14}[0-9]$/;

  return (
    <>
      <Heading>Contact Information</Heading>
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <EmailIcon />
          </InputLeftElement>
          <Input variant="flushed" {...register("email")} />
        </InputGroup>
        {errors.email && <AlertPop title={errors.email.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Telephone</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <PhoneIcon />
          </InputLeftElement>
          <Input
            variant="flushed"
            placeholder="ex: +237XXXXX..."
            {...register("telephone")}
          />
        </InputGroup>
        {errors.telephone && <AlertPop title={errors.telephone.message} />}
      </FormControl>
      <FormButtons
        page={props.page}
        goBack={props.goBack}
        goNextPage={props.goNextPage}
        isValid={isValid}
      />
    </>
  );
};

export default ContactInfo;
