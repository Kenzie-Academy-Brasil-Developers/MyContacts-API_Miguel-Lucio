import "reflect-metadata";
import "express-async-errors";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import express, { Application, json } from "express";
import { handleAppError } from "./middlewares/handleAppError.middleware";
import { routes } from "./routes";

const app: Application = express();

app.use(json());

app.use(
  "/api-documentation",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);
app.use("/", routes);

app.use(handleAppError);
export default app;
