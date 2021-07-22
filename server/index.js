import path from 'path'
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import ejsMate from 'ejs-mate'
import postRoutes from './routes/posts.js';
import plantRoutes from './routes/plants.js';
import dotenv from 'dotenv'
import methodOverride from 'method-override'

const app = express();
const __dirname = path.resolve();
dotenv.config()

const PORT = process.env.PORT|| 5000;


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use(express.static(path.join(__dirname, "client", "build")))





app.get('/',(req, res)=>{
  res.send('Hello amazing gardens')
})
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

//  creates view engine 
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



// To parse req.body
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

//step 3
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}


app.use('/posts', postRoutes);
app.use('/plantInvent', plantRoutes);






