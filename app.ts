import express from "express";
import routes from "./src/routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/bankapi", routes);

app.listen(3333, () => {
  console.log("Bank api open");
});

export default app;
