export const handleError = (err: any) => {
  let errors: any = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "Account already exists";
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }: any) => {
      errors[properties.path] = properties.message;
    });
  }

  if (err.message.includes("Account does not exist with that email")) {
    errors.email = "Account does not exist with that email";
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

  return errors;
};
