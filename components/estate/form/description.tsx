import React from "react";
import { useFormContext } from "react-hook-form";
import { Heading, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import AlertPop from "@/components/formAlert";

const Description = () => {
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
          {...register("property_briefing", {
            required: "Write a little briefing about the property",
            minLength: {
              value: 20,
              message: "Briefing too short",
            },
          })}
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
    </>
  );
};

export default Description;
