import bcrypt from "bcrypt";

export const verifyPassword = (credentials: {
  password: string;
  hashedPassword: string;
}) => {
  const isVerified = bcrypt.compareSync(
    credentials.password,
    credentials.hashedPassword
  );
  return isVerified;
};
