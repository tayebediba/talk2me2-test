import { Grid } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import classes from "./login.module.css";

const Login = () => {
  return (
    <Grid container className={classes.LoginPage}>
      <div className={classes.CardBox}>
        <h2 className={classes.titleHeader}>Talk 2 me 2</h2>
        <Card sx={{ minWidth: 400 }} className={classes.card}>
          <CardContent>
            <Typography variant="h5">Login</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Outlined"
              variant="outlined"
              type="email"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              placeholder="Outlined"
              variant="outlined"
              type="password"
              className={classes.input}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" style={{ width: "100%" }}>
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};
export default Login;
