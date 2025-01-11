import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";
import path from "path";
import { ZodError } from "zod";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
      return response.status(400).json({ message: error.errors[0].message });
    }
    if (error instanceof Error) {
      return response.status(400).json({ message: error.message });
    }
    return response.status(500).json({
      message: "Internal Server Error",
    });
  }
);

app.listen(process.env.PORT, () => {
  console.log("Server Online na porta: " + process.env.PORT);
});
