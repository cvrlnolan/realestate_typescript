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

const ContactInfo = () => {
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
          <Input
            variant="flushed"
            //   name="email"
            {...register("email", {
              required: "Enter contact email address",
              pattern: {
                value: emailPattern,
                message: "Invalid email format",
              },
            })}
          />
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
            //   name="telephone"
            placeholder="ex: +237XXXXX..."
            {...register("telephone", {
              required: "Enter contact telephone number",
              pattern: {
                value: phonePattern,
                message: "Invalid phone number format",
              },
            })}
          />
        </InputGroup>
        {errors.telephone && <AlertPop title={errors.telephone.message} />}
      </FormControl>
    </>
  );
};

export default ContactInfo;
