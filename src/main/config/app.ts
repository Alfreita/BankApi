import express from "express";
import bodyParser from "../middlewares/bodyParser";
import contentType from "../middlewares/contentType";
import cors from "../middlewares/cors";
import routes from "./routes";
const app = express();

app.use(bodyParser);
app.use(cors);
app.use(contentType);
routes(app);
export default app;
