export const checkIfIsEmailOrUsername = (usernameOrEmail) => {
  const isEmail = usernameOrEmail?.includes("@");
  return isEmail ? "email" : "username";
};
