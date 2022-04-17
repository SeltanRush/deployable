import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { useState } from "react";

import createEmotionCache from "utils/mui/createEmotionCache";
import darkTheme from "utils/mui/themes/darkTheme";
import "styles/globals.css";
import AppLayout from "components/layouts/AppLayout/AppLayout";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());

  const Layout = AppLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <ToastContainer theme="dark" />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
