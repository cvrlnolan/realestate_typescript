import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import AlertPop from "@/components/formAlert";
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";

const BasicInfo = (props: Props) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const numericPattern = /^-?\d*\.?\d*$/;

  return (
    <>
      <Heading>Basic Information</Heading>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          variant="flushed"
          placeholder="ex: Modern Apartment Downtown..."
          {...register("title")}
        />
        {errors.title && <AlertPop title={errors.title.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            $
          </InputLeftElement>
          <Input
            variant="flushed"
            type="number"
            {...register("price", {
              valueAsNumber: true,
            })}
          />
        </InputGroup>
        {errors.price && <AlertPop title={errors.price.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
        <RadioGroup name="status">
          <Stack direction="row">
            <Radio
              value="sale"
              {...register("status", {
                required: "Please check a status for the estate",
              })}
            >
              Sale
            </Radio>
            <Radio
              value="rent"
              {...register("status", {
                required: "Please check a status for the estate",
              })}
            >
              Rent
            </Radio>
          </Stack>
        </RadioGroup>
        {errors.status && <AlertPop title={errors.status.message} />}
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

export default BasicInfo;
