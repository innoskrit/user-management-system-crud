import express from 'express';
var bodyParser = require('body-parser')
import userRoutes from './routes/UserRoutes';

const app = express();
app.use(bodyParser());

app.use(userRoutes);

export default app;
