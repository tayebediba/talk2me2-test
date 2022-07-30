import { Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Grid container>
      <h1>Home</h1>
      <NavLink to="/login">
        <Button>Login</Button>
      </NavLink>
    </Grid>
  );
};
export default Home;
