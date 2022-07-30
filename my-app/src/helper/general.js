export const dateToPersian = (gregorianDate) =>
  new Date(gregorianDate).toLocaleDateString("fa-IR");

export const scrollHandler = (x, y) => window.scrollTo(x, y);

export const userIsLogin = () => {
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin === "true") {
    return true;
  } else {
    return false;
  }
};
