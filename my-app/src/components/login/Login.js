import { useState } from "react";
import { Grid, IconButton, Input, InputAdornment, Switch } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { loginService, registerService } from "../../services/authService";

import classes from "./login.module.css";

const Login = () => {
  const [code, setCode] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const changeHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const registerHandler = () => {
    registerService(userName, userEmail, password, repeatPassword).then(
      (res) => {
        if (res.status === 200) {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("token", res.data.access);
          navigate("/", { replace: true });
          setUserName("");
          setUserEmail("");
          setPassword("");
          setRepeatPassword("");
        }
      }
    );
  };
  const loginHandler = () => {
    loginService(userName, password).then((res) => {
      if (res.status === 201) {
        setCode(true);
      }
    });
  };
  return (
    <Grid container className={classes.LoginPage}>
      <div className={classes.CardBox}>
        <h2 className={classes.titleHeader}>Talk 2 me 2</h2>

        {code ? (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Register</Typography>
              <Input
                className={classes.input}
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                disableUnderline={true}
                placeholder=" نام کاربری مورد نظر خود را وارد کنید "
              />
              <Input
                className={classes.input}
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                disableUnderline={true}
                placeholder="  ایمیل خود را وارد کنید"
              />
              <Input
                className={classes.input}
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
                type={showPassword ? "text" : "password"}
                disableUnderline={true}
                placeholder="رمز خود را وارد کنید"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => changeHandler((prevState) => !prevState)}
                    >
                      <Switch color="secondary" />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Input
                className={classes.input}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
                value={repeatPassword}
                type={showPassword ? "text" : "password"}
                disableUnderline={true}
                placeholder="رمز خود را تکرار کنید"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => changeHandler((prevState) => !prevState)}
                    >
                      <Switch color="secondary" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                type="submit"
                onClick={registerHandler}
                className={classes.btnLogin}
              >
                send
              </Button>
            </CardActions>
          </Card>
        ) : (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5">Login</Typography>
              <Input
                className={classes.input}
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                disableUnderline={true}
                placeholder=" نام کاربری خود را وارد کنید "
              />

              <Input
                className={classes.input}
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
                type={showPassword ? "text" : "password"}
                disableUnderline={true}
                placeholder="رمز خود را وارد کنید"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => changeHandler((prevState) => !prevState)}
                    >
                      <Switch color="secondary" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                type="submit"
                onClick={loginHandler}
                className={classes.btnLogin}
              >
                Login
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    </Grid>
  );
};
export default Login;
