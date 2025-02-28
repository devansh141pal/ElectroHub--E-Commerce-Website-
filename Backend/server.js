import { connectDB } from './db/db.js';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});