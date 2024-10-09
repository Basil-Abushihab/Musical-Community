import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
export const hashPassword = (password: string) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
};
