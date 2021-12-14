import "../styles/globals.css";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Progress from "@/components/layout/loader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Progress />
    </ChakraProvider>
  );
}
export default MyApp;
