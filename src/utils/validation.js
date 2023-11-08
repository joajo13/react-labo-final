import { checkIfIsEmailOrUsername } from "./checkEmailOrUsername";

export function validateLoginForm({ username, password }) {
  const errors = {};

  // Check if usernameOrEmail is empty
  if (username === undefined || username.trim() === "") {
    errors.username = "Username or email is required";
  }

  // Check if password is empty
  if (password === undefined || password.trim() === "") {
    errors.password = "Password is required";
  }

  // Check if usernameOrEmail is a valid email address
  if (checkIfIsEmailOrUsername(username) === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(username)) {
      errors.username = "Please enter a valid username";
    }
  }

  // Check if password is too short
  if (password && password.length < 4) {
    errors.password = "Password must be at least 4 characters long";
  }

  return errors;
}

export const validateRegisterForm = ({
  username,
  name,
  lastname,
  phone,
  email,
  password,
  rPassword,
  birthdate,
}) => {
  const errors = {};

  // Check if username is empty
  if (username === undefined || username.trim() === "") {
    errors.username = "Username is required";
  }

  // Check if name is empty
  if (name === undefined || name.trim() === "") {
    errors.name = "Name is required";
  }

  //check if birthdate is empty
  if (birthdate === undefined || birthdate.trim() === "") {
    errors.birthdate = "Birthdate is required";
  }

  //check if phone is empty
  if (phone === undefined || phone.trim() === "") {
    errors.phone = "Phone is required";
  }

  // Check if lastname is empty
  if (lastname === undefined || lastname.trim() === "") {
    errors.lastname = "Lastname is required";
  }

  // Check if email is empty
  if (email === undefined || email.trim() === "") {
    errors.email = "Email is required";
  }

  // Check if password is empty
  if (password === undefined || password.trim() === "") {
    errors.password = "Password is required";
  }

  // Check if rPassword is empty
  if (rPassword === undefined || rPassword.trim() === "") {
    errors.rPassword = "Repeat password is required";
  }

  //check if password and rPassword are the same
  if (password !== rPassword) {
    errors.rPassword = "Passwords must match";
  }

  // Check if username is a valid email address
  if (checkIfIsEmailOrUsername(username) === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(username)) {
      errors.username = "Please enter a valid username";
    }
  }

  return errors;
};
