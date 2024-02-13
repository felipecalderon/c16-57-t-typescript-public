# PROJECT NAME
*#### Optional: Install prettier in vscode , the configuration file is already in the repository **.prettierrc ***
*#### Optional: MongoDb configuration for Docker is already included in this repository to run docker use ```docker compose up``` ***
1. Clone the project
2. Install dependencies ```
npm install```

3. Copy .env.template variables, create and added  them to an .env  file.
```
PORT =3000
NODE_ENV=development
USER_NAME= texto
PASSWORD=texto
MONGO_URL= mongodb://texto:123456@localhost:27017
MONGO_NAME=texto
MONGO_USER=texto
MONGO_PASS=texto
```
4. Environment variables are handle by env-var. To add a new variable add it to .env and them go to :
```src/config/plugins/envs/envs.plugin.ts``` 
- Create a new variable there, with the specific parameters for it e.g.:
 ```PORT: env.get("PORT").required().asPortNumber(),``` 
- Now you can call your environment variable anywhere in the application with strong typing.
E.g.: ```envs.PORT```
5. EndPoints
  * /api/v1/
	* /api/v1/
	* /api/v1/
	* /api/v1/