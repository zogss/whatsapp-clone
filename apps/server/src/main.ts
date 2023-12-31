/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import cors from 'cors';
import express from 'express';
import path from 'path';
import authRouter from './routes/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/auth', authRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);
server.on('error', console.error);
