import 'dotenv/config'

import heroicontroller from './controller/heroicontroller.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(heroicontroller);


console.log('BD conectado');

server.listen(process.env.PORT, 
   () => console.log(`API está conectada na porta ${process.env.PORT}`));
