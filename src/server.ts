import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import jobOffersRoutes from './routes/jobOffersRoutes';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/jobOffers', jobOffersRoutes);

const connectionString = '<your_mongodb_connection_string>';
mongoose.connect(connectionString, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});