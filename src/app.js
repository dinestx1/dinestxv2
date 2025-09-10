import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'; 
import passport from 'passport';
import { createServer } from 'http';


const app = express();
const server=createServer(app)
app.set("trust proxy",true)

app.use(passport.initialize())
app.use(cookieParser())
app.use(cors({
    origin:true,
    credentials:true,
    exposeHeaders:["set-cookie"]
}
));
app.use(express.json());

// Advisor routes
app.get('/api/test', (req, res) => {
  res.send('CORS is working!');
});

app.use('/api/user',userRoutes );


app.get('/', (req, res) => {
  res.send('API is running...'); 
});

// Change module.exports to export default
export {app,server};  // Use default export
