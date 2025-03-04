import express from "express";
import dotenv from "dotenv";
import router from "./routes.mjs";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://rhb-poc.netlify.app"],
    credentials: true,
    method: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
