import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppProps } from "next/app";

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

  const Layout = AppLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
