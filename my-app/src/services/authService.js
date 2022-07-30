import httpService from "./httpServices";

export const senOtpService = async (
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
