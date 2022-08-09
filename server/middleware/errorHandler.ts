interface AuthError {
  code: number;
  message: string;
}

export const handleError = (err: AuthError) => {
  let errors = { email: "", password: "", username: "" };
  if (err.code === 11000) {
    errors.email = "Account already exists";
  }

  if (err.message.includes("Account does not exist with provided email")) {
    errors.email = "Account does not exist with provided email";
  }

  if (err.message.includes("Email already in use")) {
    errors.email = "Email already in use";
  }

  if (err.message.includes("Invalid password")) {
    errors.password = "Invalid password";
  }

  if (err.message.includes("Username Required")) {
    errors.username = "Username required";
  }

  if (err.message.includes("Invalid Username")) {
    errors.username = "Username must be letters and numbers only";
  }

  if (err.message.includes("Username unavailable")) {
    errors.username = "Username unavailable";
  }

  return errors;
};
