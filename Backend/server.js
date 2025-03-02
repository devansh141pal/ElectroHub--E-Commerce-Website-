import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import userRouter from './routes/user.routes.js';
import sellerRouter from './routes/seller.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user', userRouter);
app.use('/seller', sellerRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});