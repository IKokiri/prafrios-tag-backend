import express from 'express';
import cors from 'cors';
import indexRouter from './infrastructure/routes/index.js';
import { addEnvironmentVariables } from './infrastructure/environment/env.js';
import tagRouter from './infrastructure/routes/tag.js';
import connection from './infrastructure/database/connection.js';

addEnvironmentVariables()
await connection()
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', indexRouter);
app.use('/tag/', tagRouter);

export default app;
