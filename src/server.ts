<<<<<<< HEAD
import app from './app';
import 'reflect-metadata';
import './database';

const PORT: string|number = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('🏃 Running Server');
});
=======
import express from 'express';
import { router } from './routes';
import "reflect-metadata";
import "./database";

const app = express();

app.use(express.json());
app.use(router);


app.listen(3333, () => {
    console.log("Running on port 3333...");
    
})
>>>>>>> origin/developer
