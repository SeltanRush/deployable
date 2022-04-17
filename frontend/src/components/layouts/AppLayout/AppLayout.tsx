import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/router";

import styles from "./AppLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const AppLayout = (props: Props) => {
  return (
    <div className={styles.root}>
      <header>
        <Box sx={{ bgcolor: "#686868" }}>
          <AppNavigation />
        </Box>
      </header>

      <main>
        <Stack alignItems="center">{props.children}</Stack>
      </main>

      <footer>
        <Box sx={{ bgcolor: "#686868", height: "100%", alignItems: "center" }}>
          <Typography>(C) 2022 akuznetsovs</Typography>
        </Box>
      </footer>
    </div>
  );
};

const AppNavigation = () => {
  const { pathname, push } = useRouter();

  return (
    <Stack direction="row" justifyContent="center">
      <Tabs
        value={pathname}
        aria-label="basic tabs example"
        onChange={(_, value) => push(value)}
      >
        <Tab value="/" label="Home" />
        <Tab value="/labels" label="Labels" />
        <Tab value="/about" label="About" />
      </Tabs>
    </Stack>
  );
};

export default AppLayout;
