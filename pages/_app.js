import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// imports swiper sliders
import { AgeGateProvider } from "@/context/ageGateContext";
import { ThemeProvider } from "@material-tailwind/react";
import "swiper/swiper-bundle.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { SessionProvider } from "next-auth/react";
import { ProductsProvider } from "@/context/productsContext";

const queryClient = new QueryClient();

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Economica:wght@400;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider>
        <SessionProvider session={session}>
          <AgeGateProvider>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <ProductsProvider>
                  <Component {...pageProps} />
                </ProductsProvider>
              </Hydrate>
            </QueryClientProvider>
          </AgeGateProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}