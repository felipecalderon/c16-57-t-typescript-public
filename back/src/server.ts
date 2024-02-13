import app from "./app";
import { envs } from "./config/plugins/envs/envs.plugin";

app.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}`);
});
