import express from "express";
import postRouter from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRouter);
app.use("/api/auth", authRoutes);
app.use("api/users", userRoutes);

app.listen(8000, () => {
  console.log("Connected! to localhost 8000");
});
