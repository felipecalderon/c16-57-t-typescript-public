import app from "./app";
import { envs } from "./config/plugins/envs/envs.plugin";

import { MongoDatabase } from "./data/mongo";

(async () => {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_NAME,
  });
})();

app.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}`);
});
