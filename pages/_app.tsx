import CustomToast from "@/components/CustomToast";
import { ThemeProvider } from "@/components/ThemeProvider";
import useAuthStore from "@/src/contexts/useAuthStore";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "900", "500", "700", "300", "200", "100", "600"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { initialize, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (!user && router.pathname.startsWith("/dashboard")) {
      router.push("/auth");
    } else if (user && router.pathname.startsWith("/auth")) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <CustomToast />
        <div className={poppins.className}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </ThemeProvider>
    </>
  );
}
