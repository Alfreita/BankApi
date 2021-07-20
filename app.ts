import express from "express";
import routes from "./src/routes";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/bankAPI", routes);

app.listen(3000, () => {
  console.log("Bank api open");
});
