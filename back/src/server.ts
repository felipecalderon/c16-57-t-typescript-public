import app from "./app";
import { envs } from "./config/plugins/envs/envs.plugin";

import { mongoConnection } from "./data/mongo";

mongoConnection({
  mongoUrl: envs.MONGO_URL,
  dbName: envs.MONGO_NAME,
})

app.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}`);
});
