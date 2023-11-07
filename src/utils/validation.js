import { checkIfIsEmailOrUsername } from "./checkEmailOrUsername";

export function validateForm({ username, password }) {
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
