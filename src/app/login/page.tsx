import { Grid } from "@mui/material";
import type { ReactElement } from "react";

// import { signIn } from "next-auth/react";

import { LoginBox } from "./components/LoginBox";

const LoginPage = async (): Promise<ReactElement> => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={1} md={4} />
      <Grid item sm={10} md={4}>
        <LoginBox />
      </Grid>
      <Grid item sm={1} md={4} />
    </Grid>
  );
};

export default LoginPage;
