import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Fix CORS middleware
const allowedOrigins = ["http://localhost:5173", "https://rhb-poc.netlify.app"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Ensure headers are allowed
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
