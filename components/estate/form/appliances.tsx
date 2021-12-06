import React from "react";
import { useFormContext } from "react-hook-form";
import { Heading, Stack, Checkbox } from "@chakra-ui/react";
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";

const Appliances = (props: Props) => {
  const {
    register,
    formState: { isValid },
  } = useFormContext();
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
      <FormButtons
        page={props.page}
        goBack={props.goBack}
        goNextPage={props.goNextPage}
        isValid={isValid}
      />
    </>
  );
};

export default Appliances;
