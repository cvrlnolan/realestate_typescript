import React, { useState, createRef } from "react";
import { Heading, Image, Text, Button } from "@chakra-ui/react";
import Compressor from "compressorjs";
import { AttachmentIcon } from "@chakra-ui/icons";

const Media = () => {
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
        },
      });
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
      <Button
        leftIcon={<AttachmentIcon />}
        variant="ghost"
        colorScheme="blue"
        onClick={() => imageInputRef.current?.click()}
      >
        Browse Images
      </Button>
    </>
  );
};

export default Media;
