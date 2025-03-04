import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Fix CORS middleware
app.use(
  cors({
    origin: ["https://rhb-poc.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

// ✅ Middleware
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
