import httpService from "./httpServices";

// RegisterService================================

export const registerService = async (
  username,
  userEmail,
  password,
  repeatPassword
) => {
  const data = await httpService.post("/Api/Account/Register", {
    phone: username,
    password: password,
    email: userEmail,
    repeatPassword: repeatPassword,
  });
  return data;
};

//  LoginService  =====================================

export const loginService = async (username, password) => {
  const data = await httpService.post("/Api/Account/Login", {
    userName: username,
    password: password,
  });
  return data;
};
