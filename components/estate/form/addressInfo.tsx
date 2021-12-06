import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import AlertPop from "@/components/formAlert";
import { countryOptions } from "@/assets/countries";

const AddressInfo = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <>
      <Heading>Address Information</Heading>
      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input
          variant="flushed"
          {...register("address", {
            required: "Please enter an address",
            minLength: {
              value: 8,
              message: "Address name too short",
            },
          })}
        />
        {errors.address && <AlertPop title={errors.address.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>State/Province</FormLabel>
        <Input
          variant="flushed"
          {...register("province", {
            required: "Please enter a state or province",
            minLength: {
              value: 3,
              message: "State/Province name too short",
            },
          })}
        />
        {errors.province && <AlertPop title={errors.province.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Postal Code</FormLabel>
        <Input
          variant="flushed"
          {...register("postal_code", {
            required: "Enter a valid postal code",
            minLength: {
              value: 4,
              message: "Enter a valid postal code",
            },
          })}
        />
        {errors.postal_code && <AlertPop title={errors.postal_code.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select
          variant="filled"
          placeholder="Select a country"
          {...register("country", {
            required: "Select a country",
          })}
        >
          {countryOptions.map((country) => (
            <option key={country.key} value={country.value}>
              {country.text}
            </option>
          ))}
        </Select>
        {errors.country && <AlertPop title={errors.country.message} />}
      </FormControl>
    </>
  );
};

export default AddressInfo;
