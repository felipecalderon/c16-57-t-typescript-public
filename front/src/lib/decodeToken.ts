interface TokenData {
  userId: string;
  iat: number;
  exp: number;
}
export const decodeToken = (encodedToken: string) => {
  let base64Url = encodedToken.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  const token: TokenData = JSON.parse(jsonPayload);
  return token
};
