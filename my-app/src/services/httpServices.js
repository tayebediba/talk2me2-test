import axios from "axios";
// import Cookies from "js-cookie";

const mainAxios = axios.create({
  baseURL: "https://testapi.talk2me2.ir",
});

// Request Config ---------------------------------

mainAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `bearer ${token}`;
      config.headers["Cache-Control"] = `no-store`;
      config.headers["Cache-Control"] = `no-cache`;
      config.headers["Pragma"] = `no-cache`;
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    console.log(error.response);
    Promise.reject(error);
  }
);

// Response Config -------------------------------

mainAxios.interceptors.response.use(
  (res) => {
    //  const expDate = new Date(Cookies.get("tokenExp"));
    //  const currentDate = new Date();
    //  const oneMinute = 30000;
    //  const expTokenTime = expDate.getTime() - oneMinute;
    //  const currentTime = currentDate.getTime();
    //  const isValidToken = expTokenTime > currentTime;
    //  const isToken = !!Cookies.get("token");

    //  const originalRequest = res.config;

    //  if (isToken) {
    //    return res;
    //  } else {
    //    return res;
    //  }

    return res;
  },

  (error) => {
    console.log(error);
    const originalRequest = error.config;

    //  prevent infinite loop --------------------
    //   if (
    //     error.response.status >= 400 &&
    //     originalRequest.url === "v1/Account/RefreshToken"
    //   ) {
    //     localDeAuthenticate();
    //     return Promise.reject(error);
    //   }

    // //  handle refresh token ----------------------
    //   if (error.response.status === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true;

    //     mainAxios
    //       .post("v1/Account/RefreshToken", {
    //         accessToken: Cookies.get("token"),
    //         refreshToken: Cookies.get("refreshToken"),
    //       })
    //       .then((res) => {
    //         if (res.status === 201) {
    //           const tokenInfo = res.data;
    //           const tokenData = {
    //             token: tokenInfo.accessToken,
    //             tokenExp: tokenInfo.accessTokenExpirationTime,
    //             refreshToken: tokenInfo.refreshToken,
    //             refreshTokenExp: tokenInfo.refreshTokenExpirationTime,
    //             packageType: null,
    //           };
    //           setTokenCookies(tokenData);

    //           axios.defaults.headers.common[
    //             "Authorization"
    //           ] = `Bearer ${tokenInfo.accessToken}`;
    //           Cookies.set("isLogin", true);
    //         } else {
    //           Router.push("/login");
    //         }
    //         return axios(originalRequest);
    //       });
    //   } else {
    //   }
    return Promise.reject(error);
  }
);

const httpService = {
  get: mainAxios.get,
  post: mainAxios.post,
  put: mainAxios.put,
  delete: mainAxios.delete,
};

export default httpService;
