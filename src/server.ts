import express from "express";
import expressLayouts from "express-ejs-layouts";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DATABASE_URL || "";
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.error(err));

import routes from "./routes";

const app = express();
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.listen(process.env.PORT || 3000);
app.use(routes);
