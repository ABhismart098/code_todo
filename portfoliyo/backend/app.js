import express from 'express';
const app = express();

export default app;
import {userRouter} from "./routes/user"

app.use("/api/v1", userRouter);