import React from "react";
import { useFormContext } from "react-hook-form";
import { Heading, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import AlertPop from "@/components/formAlert";
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";

const Description = (props: Props) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  return (
    <>
      <Heading>Description</Heading>
      <FormControl>
        <FormLabel>Property Briefing</FormLabel>
        <Textarea
          variant="filled"
          size="lg"
          maxH="sm"
          resize="vertical"
          {...register("property_briefing")}
        />
        {errors.property_briefing && (
          <AlertPop title={errors.property_briefing.message} />
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Additional Information</FormLabel>
        <Textarea
          variant="filled"
          size="lg"
          maxH="sm"
          resize="vertical"
          {...register("additional_info")}
        />
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

export default Description;
