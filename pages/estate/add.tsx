import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Container, Stack, Box, useToast } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import Navbar from "@/components/layout/navbar";
import BasicInfo from "@/components/estate/form/basicInfo";
import AddressInfo from "@/components/estate/form/addressInfo";
import Description from "@/components/estate/form/description";
import Appliances from "@/components/estate/form/appliances";
import PropertyInfo from "@/components/estate/form/propertyInfo";
import Media from "@/components/estate/form/media";
import ContactInfo from "@/components/estate/form/contactInfo";
import { schema } from "@/lib/estate/formSchema";
import { mockData } from "@/lib/estate/mockData";
import axios from "axios";

const AddEstate: NextPage = () => {
  const toast = useToast();

  const methods = useForm({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: mockData,
  });

  const {
    formState: { errors, isValid },
  } = methods;

  const [page, setPage] = useState(0);

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
    try {
      const res = await axios.post("/api/estate/insert", data);
      const resData = res.data;
      console.log(resData);
    } catch (e: any) {
      console.log(e.message);
    }
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
                  {page === 5 && (
                    <Media
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}

                  {/* Page 6 (last step) */}
                  {page === 6 && (
                    <ContactInfo
                      page={page}
                      goBack={goBack}
                      goNextPage={goNextPage}
                    />
                  )}
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
