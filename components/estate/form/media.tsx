import React, { useState, createRef } from "react";
import { Heading, Image, Text, Button } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import Compressor from "compressorjs";
import { AttachmentIcon } from "@chakra-ui/icons";
import type { Props } from "@/assets/types";
import FormButtons from "./formButtons";
import AlertPop from "@/components/formAlert";
import UploadImage from "@/lib/estate/uploadImage";

const Media = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [image, setImage] = useState<Blob | null>();

  const [preview, setPreviewImg] = useState<string | null>();

  const imageInputRef = createRef<HTMLInputElement>();

  const handleImageChange = (e: any) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      new Compressor(image, {
        quality: 0.8,
        success: (compressedImage) => {
          setImage(compressedImage);
          setPreviewImg(URL.createObjectURL(compressedImage));
          upload(compressedImage);
        },
      });
    }
  };

  const upload = async (image: Blob) => {
    try {
      const imgUrl = await UploadImage(image);
      if (imgUrl) {
        console.log(imgUrl);
        setValue("imgUrl", imgUrl);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Heading>Media</Heading>
      {preview && (
        <Image
          alt="estate_img"
          src={preview}
          boxSize="sm"
          rounded="lg"
          objectFit="cover"
          alignSelf="center"
        />
      )}
      <Text color="gray.500" textAlign="center">
        Select display image
      </Text>
      <input
        ref={imageInputRef}
        type="file"
        hidden
        onChange={handleImageChange}
      />
      <input hidden {...register("imgUrl")} />
      {errors.imgUrl && <AlertPop title={errors.imgUrl.message} />}
      <Button
        leftIcon={<AttachmentIcon />}
        variant="ghost"
        colorScheme="blue"
        onClick={() => imageInputRef.current?.click()}
      >
        Browse Images
      </Button>
      <FormButtons
        page={props.page}
        goBack={props.goBack}
        goNextPage={props.goNextPage}
      />
    </>
  );
};

export default Media;
