import React from "react";
import { useFormContext } from "react-hook-form";
import { Heading, Stack, Checkbox } from "@chakra-ui/react";

const Appliances = () => {
  const { register } = useFormContext();
  return (
    <>
      <Heading>Appliances</Heading>
      <Stack spacing={4} direction={["column", "row"]}>
        <Checkbox {...register("cooling")}>Cooling</Checkbox>
        <Checkbox {...register("heating")}>Heating</Checkbox>
        <Checkbox {...register("internet")}>Internet</Checkbox>
        <Checkbox {...register("furniture")}>Furniture</Checkbox>
        <Checkbox {...register("parking")}>Parking</Checkbox>
      </Stack>
    </>
  );
};

export default Appliances;
