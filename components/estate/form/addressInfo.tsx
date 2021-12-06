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
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";

const AddressInfo = (props: Props) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <>
      <Heading>Address Information</Heading>
      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input variant="flushed" {...register("address")} />
        {errors.address && <AlertPop title={errors.address.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>State/Province</FormLabel>
        <Input variant="flushed" {...register("province")} />
        {errors.province && <AlertPop title={errors.province.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Postal Code</FormLabel>
        <Input variant="flushed" {...register("postal_code")} />
        {errors.postal_code && <AlertPop title={errors.postal_code.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Select
          variant="filled"
          placeholder="Select a country"
          {...register("country")}
        >
          {countryOptions.map((country) => (
            <option key={country.key} value={country.value}>
              {country.text}
            </option>
          ))}
        </Select>
        {errors.country && <AlertPop title={errors.country.message} />}
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

export default AddressInfo;
