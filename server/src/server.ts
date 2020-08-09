import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import routes from './routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = Number(process.env.PORT);
const HOST = String(process.env.HOST);
app.listen(PORT, HOST, () =>
  console.log(`Listening on http://${HOST}:${PORT} ...`)
);
