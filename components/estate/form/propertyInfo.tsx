import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import AlertPop from "@/components/formAlert";
import { categoryOptions } from "@/assets/categories";
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";

const PropertyInfo = (props: Props) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <>
      <Heading>Property Information</Heading>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          variant="filled"
          placeholder="Select a category"
          {...register("category")}
        >
          {categoryOptions.map((category) => (
            <option key={category.key} value={category.value}>
              {category.text}
            </option>
          ))}
        </Select>
        {errors.category && <AlertPop title={errors.category.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Bedrooms</FormLabel>
        <NumberInput variant="flushed" name="bedrooms" min={0}>
          <NumberInputField
            {...register("bedrooms", {
              valueAsNumber: true,
            })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.bedrooms && <AlertPop title={errors.bedrooms.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Baths</FormLabel>
        <NumberInput variant="flushed" name="baths" min={0}>
          <NumberInputField
            {...register("baths", {
              valueAsNumber: true,
            })}
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.baths && <AlertPop title={errors.baths.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Surface Area</FormLabel>
        <InputGroup>
          <Input
            type="number"
            variant="flushed"
            {...register("surface_area", {
              valueAsNumber: true,
            })}
          />
          <InputRightElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            sqft
          </InputRightElement>
        </InputGroup>
        {errors.surface_area && (
          <AlertPop title={errors.surface_area.message} />
        )}
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

export default PropertyInfo;
