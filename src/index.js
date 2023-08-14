import express from 'express'
import cors from 'cors'

import usersRoutes from './routes/users.routes.js'

const app = express()



const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  optionSuccessStatus:200
};

app.use(cors(corsOptions));



app.use(express.json())

app.use('/', usersRoutes);

app.listen(3000)

console.log(`Server on port:`, 3000)