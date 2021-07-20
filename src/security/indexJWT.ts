import Jwt from "jsonwebtoken";
import dotEnv from "dotenv";

dotEnv.config();
const secret = process.env.SECRET;
if (!secret) {
  throw new Error("env undefined");
}
const auth = (email: string) => {
  const token = Jwt.sign(email, secret, {
    expiresIn: 300,
  });
  return token;
};
