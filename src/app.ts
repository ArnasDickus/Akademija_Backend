import express, {Application, Request, Response} from 'express';
import { connectDB } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

connectDB();


app.get('/', (req: Request, res: Response) => {
   res.send('hello'); 
});

app.listen(5000, () => console.log('Server running'))