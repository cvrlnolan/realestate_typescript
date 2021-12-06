import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Container, Stack, Box, Button, useToast } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowBackIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import Navbar from "@/components/layout/navbar";
import UploadImage from "@/lib/estate/uploadImage";
import BasicInfo from "@/components/estate/form/basicInfo";
import AddressInfo from "@/components/estate/form/addressInfo";
import Description from "@/components/estate/form/description";
import Appliances from "@/components/estate/form/appliances";
import PropertyInfo from "@/components/estate/form/propertyInfo";
import Media from "@/components/estate/form/media";
import ContactInfo from "@/components/estate/form/contactInfo";
import { schema } from "@/lib/estate/formSchema";

const AddEstate: NextPage = () => {
  const toast = useToast();

  const methods = useForm({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const {
    formState: { errors, isValid },
  } = methods;

  const [page, setPage] = useState(0);

  const [image, setImage] = useState<Blob | null>();

  function goNextPage() {
    if (page === 6) return;
    setPage((page) => page + 1);
  }

  function goBack() {
    if (page === 0) return;
    setPage((page) => page - 1);
  }

  const onSubmit = async (data: any) => {
    console.log(data);
    if (!image) {
      toast({
        title: "No image selected.",
        description: "Please choose a display image for the estate.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const estateData = {
      ...data,
      totalRating: 0,
      reviews: 0,
    };
    const uploadData = {
      imageData: image,
      estateData,
      toast,
    };
    await UploadImage(uploadData);
  };

  return (
    <>
      <Head>
        <title>RealEstate | Add Estate</title>
      </Head>
      <Navbar>
        <Container maxW="container.xl" w="full" centerContent>
          <Box maxW="xl" p={10} w="full" rounded="lg" boxShadow="lg">
            {/* Multi-step form */}
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Stack spacing={10} width="100%">
                  {/* Initial Page(Step) */}
                  {page === 0 && (
                    <BasicInfo
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}

                  {/* Page 1 */}
                  {page === 1 && (
                    <AddressInfo
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}

                  {/* Page 2 */}
                  {page === 2 && (
                    <PropertyInfo
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}

                  {/* Page 3 */}
                  {page === 3 && (
                    <Description
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}

                  {/* Page 4 */}
                  {page === 4 && (
                    <Appliances
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}

                  {/* Page 5 */}
                  {page === 5 && <Media />}

                  {/* Page 6 (last step) */}
                  {page === 6 && <ContactInfo />}

                  {/* {page === 6 && (
                    <Button
                      type="submit"
                      leftIcon={<CheckCircleIcon />}
                      colorScheme="green"
                      isDisabled={!isValid}
                    >
                      Submit
                    </Button>
                  )} */}
                </Stack>
              </form>
            </FormProvider>
          </Box>
        </Container>
      </Navbar>
    </>
  );
};

export default AddEstate;
