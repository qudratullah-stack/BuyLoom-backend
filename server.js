import express from 'express';
import { dbconnect } from './src/config/db.js';
import router from './src/routes/router.js';
import routercategory from './src/routes/categoryRouter.js';
import cors from 'cors'
dbconnect()

const port = 9000
const app = express();
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.get('/',(req,res)=>{
  res.send('hello qudratullah')
})
app.use('/api/category', routercategory)
app.use('/api/product/category', routercategory)
app.use('/api/Orderproduct/', routercategory)
app.use('/authentication',router)

app.listen(port, ()=>{
  console.log(`your app is listing ${port}`)
})
