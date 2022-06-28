import {inserirHeroi} from '../repository/heroirepository.js'

import { Router } from 'express';
const server = Router();

server.post('/inserir', async (req, resp) => {
    try{
        const novoHeroi = req.body;

        if (!novoHeroi.nome)
            throw new Error ('Nome do heroi é obrigatório');

        if (!novoHeroi.voa)
            throw new Error ('É obrigatório informar se o heroi voa');


        const heroiInserido = await inserirHeroi(novoHeroi);

        resp.send(heroiInserido);
    }catch(err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;

