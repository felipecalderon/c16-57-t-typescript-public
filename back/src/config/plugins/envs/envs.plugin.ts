import "dotenv/config";
import * as env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  NODE_ENV: env.get("NODE_ENV").default("development").asString(),
  USER_NAME: env.get("USER_NAME").required().asString(),
  PASSWORD: env.get("PASSWORD").required().asString(),
  MONGO_URL: env.get("MONGO_URL").required().asString(),
  MONGO_NAME: env.get("MONGO_NAME").required().asString(),
  MONGO_USER: env.get("MONGO_USER").required().asString(),
  MONGO_PASS: env.get("MONGO_PASS").required().asString(),
  SECRET_JTW: env.get("SECRET_JTW").required().asString(),
};
