import express from 'express';
import { router } from './routes';
import 'reflect-metadata';
import './database';

//const PORT: string|number = process.env.PORT || 3333;
const app = express()

app.use(express.json());
app.use(router);


app.listen(3333, () => {    
    console.log("Running on port 3333...");
    
})
function existsClient(existsClient: any) {
    throw new Error('Function not implemented.');
}
